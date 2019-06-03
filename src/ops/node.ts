import { SyncDocument, SyncText, SyncNode, SyncTreeNode } from "../types/sync";
import { SyncInsertNodeOperation, SyncMoveNodeOperation, SyncRemoveNodeOperation, SyncSplitNodeOperation, SyncMergeNodeOperation } from "./sync";
import { walk, getAncestor, incrementPath, decrementPath } from "./path";

export const insertNode = (doc: SyncDocument, op: SyncInsertNodeOperation): SyncDocument => {
  const [parentNode, index] = getAncestor(doc, op.path)

  if (parentNode.object === 'text') {
    throw new TypeError('cannot insert node into text node');
  }

  parentNode.nodes!.splice(index, 0, op.node);

  return doc;
}

export const moveNode = (doc: SyncDocument, op: SyncMoveNodeOperation): SyncDocument => {
  const [srcParent, srcIndex] = getAncestor(doc, op.path);
  const [destParent, destIndex] = getAncestor(doc, op.newPath);

  if (srcParent.object === 'text' || destParent.object === 'text') {
    throw new TypeError('cannot move node as child of a text node');
  }

  destParent.nodes!.splice(destIndex, 0, ...srcParent.nodes!.splice(srcIndex, 1));

  return doc;
}

export const removeNode = (doc: SyncDocument, op: SyncRemoveNodeOperation): SyncDocument => {
  const [parentNode, index] = getAncestor(doc, op.path)
  
  if (parentNode.object === 'text') {
    throw new TypeError('cannot remove node from text node');
  }

  parentNode.nodes!.splice(index, 1);

  return doc;
}

export const splitNode = (doc: SyncDocument, op: SyncSplitNodeOperation): SyncDocument => {
  const node = walk(doc, op.path);

  let splitNode;
  if (node.object === 'text') {
    splitNode = {
      object: 'text',
      text: node.text.splice(op.position),
      marks: Array.from(node.marks)
    } as SyncText;
  } else {
    splitNode = {
      ...node,
      nodes: node.nodes!.splice(op.position)
    };
  }

  return insertNode(doc, {
    type: 'insert_node',
    path: incrementPath(op.path),
    node: splitNode,
  })
}

export const mergeNode = (doc: SyncDocument, op: SyncMergeNodeOperation): SyncDocument => {
  const node = walk(doc, op.path);
  const prevNode = walk(doc, decrementPath(op.path));

  if (node.object !== prevNode.object) {
    throw new TypeError(`cannot merge nodes of differing types ${node.object} and ${prevNode.object}`);
  }

  // fold node into prevNode
  // FIXME: please don't cast here
  if (prevNode.object === 'text') {
    prevNode.text.push(...(node as SyncText).text);
  } else {
    if (prevNode.nodes && (node as SyncTreeNode).nodes) {
      prevNode.nodes.push(...(node as SyncTreeNode).nodes!);
    }
  }

  return removeNode(doc, {
    type: 'remove_node',
    path: op.path,
  })
}