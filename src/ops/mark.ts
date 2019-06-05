import { SyncDocument } from "../types/sync";
import { SyncAddMarkOperation, SyncRemoveMarkOperation, SyncSetMarkOperation } from "../types/ops";
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
    return doc;
  } 

  node.marks.push(op.mark);
  return doc;
}

export const removeMark = (doc: SyncDocument, op: SyncRemoveMarkOperation): SyncDocument => {
  const node = walk(doc, op.path);
  if (node.object !== 'text') {
    throw new TypeError('cannot set marks on non-text node');
  }

  // emulate Set behaviour
  const existingIdx = node.marks.findIndex(existingMark => 
    existingMark.type === op.mark.type && equal(existingMark.data, op.mark.data)
  )

  if (existingIdx === -1) {
    return doc;
  }

  node.marks.splice(existingIdx, 1);

  return doc;
}

export const setMark = (doc: SyncDocument, op: SyncSetMarkOperation): SyncDocument => {
  const node = walk(doc, op.path);
  if (node.object !== 'text') {
    throw new TypeError('cannot set marks on non-text node');
  }

  const existingIdx = node.marks.findIndex(existingMark => 
    existingMark.type === op.properties.type && equal(existingMark.data, op.properties.data)
  )

  if (existingIdx === -1) {
    console.warn('did not find old mark with properties', op.properties);

    if (!op.newProperties.type) {
      throw new TypeError('no old mark, and new mark missing type');
    }

    node.marks.push({
      object: 'mark',
      type: op.newProperties.type,
      ...op.newProperties,
    });
  } else  {
    node.marks[existingIdx] = {
      object: 'mark',
      ...node.marks[existingIdx],
      ...op.newProperties
    }
  }

  return doc;
}