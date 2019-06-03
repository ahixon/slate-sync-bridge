import { walk } from "./path";
import { SyncDocument } from "../types/sync";
import { SyncInsertTextOperation, SyncRemoveTextOperation } from "./sync";

export const insertText = (doc: SyncDocument, op: SyncInsertTextOperation): SyncDocument => {
  const node = walk(doc, op.path);
  if (node.object !== 'text') {
    throw new TypeError('did not get text node at path');
  }

  node.text.splice(op.offset, 0, ...Array.from(op.text));

  return doc;
}

export const removeText = (doc: SyncDocument, op: SyncRemoveTextOperation): SyncDocument => {
  const node = walk(doc, op.path);
  if (node.object !== 'text') {
    throw new TypeError('did not get text node at path');
  }

  node.text.splice(op.offset, op.text.length);

  return doc;
}