import { Operation } from "slate";
import { SyncDocument } from "./types/sync";
import { toSyncOp } from "./ops/convert";
import { insertText, removeText } from "./ops/text";
import { insertNode, moveNode, removeNode, splitNode, mergeNode, setNodeProperties } from "./ops/node";
import { addMark, removeMark, setMark } from "./ops/mark";

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
    case 'set_node':
      return setNodeProperties(doc, op);
    
    case 'add_mark':
      return addMark(doc, op);
    case 'remove_mark':
      return removeMark(doc, op);
    case 'set_mark':
      return setMark(doc, op);
  }

  throw new TypeError('invalid op');
}