import { SyncDocument, SyncText, SyncNode, SyncTreeNode } from "../types/sync";
import {
  SyncInsertNodeOperation,
  SyncMoveNodeOperation,
  SyncRemoveNodeOperation,
  SyncSplitNodeOperation,
  SyncMergeNodeOperation,
  SyncSetNodeOperation
} from "../types/ops";
import { walk, getAncestor, incrementPath, decrementPath } from "./path";
import Automerge from 'automerge';

export const insertNode = (
  doc: SyncDocument,
  op: SyncInsertNodeOperation
): SyncDocument => {
  const [parentNode, index] = getAncestor(doc, op.path);

  if (parentNode.object === "text") {
    throw new TypeError("cannot insert node into text node");
  }

  parentNode.nodes!.splice(index, 0, op.node);

  return doc;
};

export const moveNode = (
  doc: SyncDocument,
  op: SyncMoveNodeOperation
): SyncDocument => {
  const [srcParent, srcIndex] = getAncestor(doc, op.path);
  const [destParent, destIndex] = getAncestor(doc, op.newPath);

  if (srcParent.object === "text" || destParent.object === "text") {
    throw new TypeError("cannot move node as child of a text node");
  }

  destParent.nodes!.splice(
    destIndex,
    0,
    ...srcParent.nodes!.splice(srcIndex, 1)
  );

  return doc;
};

export const removeNode = (
  doc: SyncDocument,
  op: SyncRemoveNodeOperation
): SyncDocument => {
  const [parentNode, index] = getAncestor(doc, op.path);

  if (parentNode.object === "text") {
    throw new TypeError("cannot remove node from text node");
  }

  parentNode.nodes!.splice(index, 1);

  return doc;
};

export const splitNode = (
  doc: SyncDocument,
  op: SyncSplitNodeOperation
): SyncDocument => {
  const node = walk(doc, op.path);

  let splitNode: SyncNode;
  if (node.object === "text") {
    splitNode = {
      object: "text",
      text: node.text.splice(op.position),
      marks: Array.from(node.marks)
    } as SyncText;
  } else {
    // @ts-ignore
    splitNode = {
      object: node.object,

      // @ts-ignore
      type: node.type,
      data: {
        ...node.data,
      },

      nodes: node.nodes!.splice(op.position)
    };
  }

  return insertNode(doc, {
    type: "insert_node",
    path: incrementPath(op.path),
    node: splitNode
  });
};

export const mergeNode = (
  doc: SyncDocument,
  op: SyncMergeNodeOperation
): SyncDocument => {
  const node = walk(doc, op.path);
  const prevNode = walk(doc, decrementPath(op.path));

  if (node.object !== prevNode.object) {
    throw new TypeError(
      `cannot merge nodes of differing types ${node.object} and ${
        prevNode.object
      }`
    );
  }

  // fold node into prevNode
  // FIXME: please don't cast here
  if (prevNode.object === "text") {
    // detach from parent
    const text = (node as SyncText).text.splice(0, (node as SyncText).text.length);

    // remove next node
    removeNode(doc, {
      type: "remove_node",
      path: op.path
    });

    // add to previous node
    prevNode.text.push(...text);
  } else {
    // detach from parent
    const children = (node as SyncTreeNode).nodes!.splice(0, (node as SyncTreeNode).nodes!.length);

    // remove old node
    removeNode(doc, {
      type: "remove_node",
      path: op.path
    });

    // add to previous node
    if (prevNode.nodes && children) {
      prevNode.nodes.push(...children);
    }
  }
  
  return doc;
};

export const setNodeProperties = (
  doc: SyncDocument,
  op: SyncSetNodeOperation
): SyncDocument => {
  const node = walk(doc, op.path);

  const { type, data } = op.newProperties;

  if (type) {
    // @ts-ignore
    node.type = type;
  }

  if (node.object !== "text" && data) {
    const jsonData = data.toJSON ? data.toJSON() : { ...data };
    node.data = jsonData;
  }

  return doc;
};
