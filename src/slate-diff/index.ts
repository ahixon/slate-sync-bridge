import { SyncDocument, SyncNode, SyncBlock } from "../types/sync";
import { toSlateDocument } from "..";
import { NodeJSON } from "../types/slate";
import { Document, Node, KeyUtils, Block, Inline, Text } from "slate";
import { Map as ImmutableMap, List as ImmutableList } from 'immutable';
import { getObjectId } from "automerge";

type AutomergeChange = {
  ops: Array<AutomergeAction>;
}

type AutomergeActionMeta = {
  action: "set" | "ins" | "del" | "link" | "makeList" | "makeMap";
  obj: string;
};

type AutomergeAction = AutomergeActionMeta;

const MAX_NODE_DEPTH = 1000;

type ObjectID = string;

export class CachedSlateTransformer {
  nodeCache: Map<ObjectID, Node>;
  parentCache: Map<ObjectID, ObjectID>;

  constructor() {
    this.nodeCache = new Map();
    this.parentCache = new Map();
  }

  // fillCache(syncDoc: SyncDocument, slateDoc: Document) {
  //   this.fillCacheRecursive(syncDoc, slateDoc, syncDoc);
  // }

  // private fillCacheRecursive(syncNode: SyncNode, slateNode: Node, parentNode: SyncNode) {
  //   // add this node to the cache
  //   const objectId = getObjectId(syncNode);
  //   this.nodeCache.set(objectId, slateNode);

  //   // and track the parent
  //   this.parentCache.set(getObjectId(parentNode), objectId);

  //   if (syncNode.object === 'text' || slateNode instanceof Text || !syncNode.nodes) {
  //     return;
  //   }

  //   // walk the children and add them
  //   // trees are meant to be a 1-1 map
  //   syncNode.nodes.forEach((syncChild, idx) => {
  //     const slateChild = slateNode.nodes.get(idx);
  //     this.fillCacheRecursive(syncChild, slateChild, syncNode);
  //   });
  // }

  private createCachedSlateNode (
    syncNode: SyncNode,
    parentNode: SyncNode,
  ): Node {
    if (!syncNode.object) {
      throw new TypeError(`cannot create node with missing type`);
    }
    
    // used cached version if available
    const objectId: string = getObjectId(syncNode);
    console.log('looking up', JSON.stringify(syncNode), 'with objectId', objectId);
    
    const node = this.nodeCache.get(objectId);
    if (node) {
      console.log('cache hit');
      return node;
    }
    console.warn('cache miss');

    // construct a new one
    const slateNode = this.createSlateNode(syncNode);
    
    // add to cache
    this.nodeCache.set(objectId, slateNode);

    console.log('setting cache for', objectId)

    // link the parent object ids
    this.parentCache.set(objectId, getObjectId(parentNode));

    // do the same for all other fields that aren't nodes (e.g. text and node arrays)
    // TODO: make this a deep check
    Object.keys(syncNode).forEach(attr => {
      // @ts-ignore
      const attrObjectId = getObjectId(syncNode[attr]);
      if (attrObjectId) {
        this.parentCache.set(attrObjectId, objectId);  
      }
    })

    console.log('linking', objectId, 'to have parent', getObjectId(parentNode));

    return slateNode;
  };

  // TODO: memoise
  private collectParents(objectId: string) {
    const parents = [];

    let currentId = objectId;
    for (let i = 0; i < MAX_NODE_DEPTH; i++) {
      const parentId = this.parentCache.get(currentId);
      if (parentId) {
        parents.push(parentId);
        currentId = parentId;
      } else {
        return parents;
      }
    }

    throw new Error('nodes too deeply nested');
  }

  apply(syncdoc: SyncDocument, actions: Array<AutomergeChange> = []): Document {
    // collect the objectIds of objects changed in the document
    const objectIdSet = new Set<string>();
    actions.forEach(action => {
      action.ops.forEach(op => {
        console.log(JSON.stringify(op));
        objectIdSet.add(op.obj);
      })
    })
    
    const objectIds = Array.from(objectIdSet.values());

    // find all their parents; we want to invalidate them too as their children changed
    const parentObjectIds = Array.from(objectIds.values()).flatMap(objectId => {
      console.log('\tcollecting', objectId, );
      return this.collectParents(objectId);
    })

    console.log(this.parentCache, this.nodeCache);
    
    // remove each changed object and their ancestors from the cache so that we rebuild them
    const invalidate = parentObjectIds.concat(objectIds);
    console.log('invalidated', invalidate, objectIds, parentObjectIds);
    
    invalidate.forEach(objectId => {
      this.nodeCache.delete(objectId);

      // do *not* invalidate the children of each ancestor
    })


    // construct a (partially) cached version of the Document
    return this.createCachedDocument(syncdoc);
  }

  createSlateNode(node: SyncNode): Node {
    switch (node.object) {
      case 'block':
        return this.createCachedBlock(node)
      case 'text':
        // @ts-ignore bad types
        return Text.fromJSON({
          ...node,
          text: node.text.join("")
        })

      // TODO: inline?
      default: {
        throw new Error(`unsupported node type ${node.object}`);
      }
    }
  }

  createCachedNodeList(syncNodes: Array<SyncNode>, parent: SyncNode): Node[] {
    return syncNodes.map(child => this.createCachedSlateNode(child, parent));
  }

  createCachedBlock(syncNode: SyncBlock): Block {
    // create children first
    let nodes = syncNode.nodes ? this.createCachedNodeList(syncNode.nodes, syncNode) : [];

    return Block.fromJSON({
      ...syncNode,

      // will end up calling createNodeList which calls Node.create on each element
      // each should already be a Slate Node, so constructor should be a no-op

      // @ts-ignore -- need to exclude Document possibility
      nodes: ImmutableList(nodes)
    })
  }
  
  createCachedDocument(syncNode: SyncDocument): Document {
    // create children first
    let nodes = syncNode.nodes ? this.createCachedNodeList(syncNode.nodes, syncNode) : [];

    return Document.fromJSON({
      ...syncNode,

      // @ts-ignore
      nodes: ImmutableList(nodes)
    })
  }
}
