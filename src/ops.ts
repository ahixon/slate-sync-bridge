import { Operation } from "slate";
import { SyncDocument } from "./types/sync";
import { toSyncOp } from "./ops/sync";
import { insertText, removeText } from "./ops/text";

export const applyOperation = (doc: SyncDocument, slateOp: Operation): SyncDocument => {
  const op = toSyncOp(slateOp);

  switch (op.type) {
    case 'insert_text':
      return insertText(doc, op);
    
    case 'remove_text':
      return removeText(doc, op);
  }

  return doc;
}