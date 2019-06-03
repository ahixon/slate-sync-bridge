import { Operation, Path, MarkJSON } from "slate";
import Immutable, { List } from "immutable";
import { SyncMark, SyncNode } from "../types/sync";
import { createSyncNode } from "../nodes";
import { NodeJSON } from "../types/slate";

export type SyncInsertTextOperation = {
  type: "insert_text";
  path: number[];
  offset: number;
  text: string;
  marks: SyncMark[];
};

export type SyncRemoveTextOperation = {
  type: "remove_text";
  path: number[];
  offset: number;
  text: string;
};

export type SyncInsertNodeOperation = {
  type: "insert_node";
  path: number[];
  node: SyncNode;
};

export type SyncMoveNodeOperation = {
  type: "move_node";
  path: number[];
  newPath: number[];
};

export type SyncRemoveNodeOperation = {
  type: "remove_node";
  path: number[];
}

export type SyncOperation =
  | SyncInsertTextOperation
  | SyncRemoveTextOperation
  | SyncInsertNodeOperation
  // | SyncMoveNodeOperation;
  | SyncRemoveNodeOperation;

const toNumberPath = (path: Path | number[]): number[] => {
  if (typeof path === "string") {
    // return [Number(path)];
    throw new TypeError("cannot handle key-based paths");
  } else if (typeof path === "number") {
    return [path];
  } else if (Array.isArray(path)) {
    return path;
  } else {
    return path.toJS();
  }
};

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
  // } else if (op.type === "move_node") {
  //   return {
  //     type: op.type,

  //     path: toNumberPath(op.path),
  //     newPath: toNumberPath(op.newPath)
  //   };
  } else if (op.type === 'remove_node') {
    return {
      type: op.type,

      path: toNumberPath(op.path)
    }
  } else if (op.type === "set_selection" || op.type === "set_value") {
    // Value specific operations
    return null;
  }

  throw new TypeError(`cannot convert op ${JSON.stringify(op)} to sync op`);
};
