import { SyncDocument } from "../types/sync";
import { SyncInsertNodeOperation, SyncMoveNodeOperation, SyncRemoveNodeOperation } from "./sync";
import { walk } from "./path";

export const insertNode = (doc: SyncDocument, op: SyncInsertNodeOperation): SyncDocument => {
  const index = op.path[op.path.length - 1];
  const parentNode = walk(doc, op.path.slice(0, op.path.length - 1));

  if (parentNode.object === 'text') {
    throw new TypeError('cannot insert node into text node');
  }

  parentNode.nodes!.splice(index, 0, op.node);

  return doc;
}

export const moveNode = (doc: SyncDocument, op: SyncMoveNodeOperation): SyncDocument => {
  const srcIndex = op.path[op.path.length - 1];
  const srcParent = walk(doc, op.path.slice(0, op.path.length - 1));

  const destIndex = op.newPath[op.newPath.length - 1];
  const destParent = walk(doc, op.newPath.slice(0, op.newPath.length - 1));

  if (srcParent.object === 'text' || destParent.object === 'text') {
    throw new TypeError('cannot move node as child of a text node');
  }

  destParent.nodes!.splice(destIndex, 0, ...srcParent.nodes!.splice(srcIndex, 1));

  return doc;
}

export const removeNode = (doc: SyncDocument, op: SyncRemoveNodeOperation): SyncDocument => {
  const index = op.path[op.path.length - 1];
  const parentNode = walk(doc, op.path.slice(0, op.path.length - 1));
  if (parentNode.object === 'text') {
    throw new TypeError('cannot remove node from text node');
  }

  parentNode.nodes!.splice(index, 1);

  return doc;
}