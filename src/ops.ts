import { Operation } from "slate";
import { SyncDocument } from "./types/sync";
import { toSyncOp } from "./ops/sync";
import { insertText, removeText } from "./ops/text";
import { insertNode, moveNode, removeNode, splitNode, mergeNode } from "./ops/node";

export const applyOperation = (doc: SyncDocument, slateOp: Operation): SyncDocument => {
  const op = toSyncOp(slateOp);

  if (!op) {
    return doc;
  }

  switch (op.type) {
    case 'insert_text':
      return insertText(doc, op);
    
    case 'remove_text':
      return removeText(doc, op);
    
    case 'insert_node':
      return insertNode(doc, op);
    
    case 'move_node':
      return moveNode(doc, op);

    case 'remove_node':
      return removeNode(doc, op);
    
    case 'split_node':
      return splitNode(doc, op);

    case 'merge_node':
      return mergeNode(doc, op);
  }
}