import { Operation, Path, MarkJSON } from "slate";
import { createSyncNode } from "../node-convert/sync";
import { NodeJSON } from "../types/slate";
import { SyncOperation } from "../types/ops";
import { toNumberPath } from "./path";

// DO NOT spread objects here; source is a Immutable Record
export const toSyncOp = (op: Operation): SyncOperation | null => {
  if (op.type === "insert_text") {
    return {
      type: op.type,

      offset: op.offset,
      text: op.text,
      path: toNumberPath(op.path),
      marks: op.marks ? op.marks.map(mark => mark.toJSON() as MarkJSON) : []
    };
  } else if (op.type === "remove_text") {
    return {
      type: op.type,

      offset: op.offset,
      text: op.text,
      path: toNumberPath(op.path)
    };
  } else if (op.type === "insert_node") {
    return {
      type: op.type,

      path: toNumberPath(op.path),
      node: createSyncNode(op.node.toJSON() as NodeJSON)
    };
  } else if (op.type === "move_node") {
    return {
      type: op.type,

      path: toNumberPath(op.path),
      newPath: toNumberPath(op.newPath)
    };
  } else if (op.type === 'remove_node') {
    return {
      type: op.type,

      path: toNumberPath(op.path)
    }
  } else if (op.type === 'split_node') {
    return {
      type: op.type,

      path: toNumberPath(op.path),
      position: op.position,
      properties: op.properties
    }
  } else if (op.type  ===  'merge_node') {
    return {
      type: op.type,

      path: toNumberPath(op.path),
    }
  } else if (op.type === 'add_mark') {
    return {
      type: op.type,

      path: toNumberPath(op.path),
      mark: op.mark.toJSON() as MarkJSON,
    }
  } else if (op.type === "set_selection" || op.type === "set_value") {
    // Value specific operations
    return null;
  }

  throw new TypeError(`cannot convert op ${JSON.stringify(op)} to sync op`);
};
