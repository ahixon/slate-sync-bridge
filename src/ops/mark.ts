import { SyncDocument } from "../types/sync";
import { SyncAddMarkOperation } from "../types/ops";
import { walk } from "./path";
import equal from 'fast-deep-equal';

export const addMark = (doc: SyncDocument, op: SyncAddMarkOperation): SyncDocument => {
  const node = walk(doc, op.path);
  if (node.object !== 'text') {
    throw new TypeError('cannot set marks on non-text node');
  }

  // emulate Set behaviour
  const existingIdx = node.marks.findIndex(existingMark => 
    existingMark.type === op.mark.type && equal(existingMark.data, op.mark.data)
  )

  if (existingIdx > -1) {
    node.marks[existingIdx] = op.mark;
  } else {
    node.marks.push(op.mark);
  }

  return doc;
}