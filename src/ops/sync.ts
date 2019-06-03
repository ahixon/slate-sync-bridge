import { Operation, InsertTextOperation, Path, MarkJSON } from "slate";
import Immutable, { List } from 'immutable';
import { SyncMark } from "../types/sync";

export type SyncInsertTextOperation = {
  type: 'insert_text';
  path: number[];
  offset: number;
  text: string;
  marks: SyncMark[];
  data: object;
};

export type SyncRemoveTextOperation = {
  type: 'remove_text';
  path: number[];
  offset: number;
  text: string;
  data: object;
}

export type SyncOperation = SyncInsertTextOperation | SyncRemoveTextOperation;

const toNumberPath = (path: Path): number[] => {
  if (typeof path === 'string') {
    return [Number(path)];
  } else if (typeof path === 'number') {
    return [path]
  } else if (Array.isArray(path)) {
    return path;
  } else {
    return path.toJS();
  }
}

// DO NOT spread objects here; source is a Immutable Record
export const toSyncOp = (op: Operation): SyncOperation => {
  if (op.type === 'insert_text') {
    return {
      type: op.type,
      offset: op.offset,
      text: op.text,
      path: toNumberPath(op.path),
      marks: op.marks ? op.marks.map(mark => mark.toJSON() as MarkJSON) : [],
      data: op.data ? op.data.toJS() : {}
    }
  } else if (op.type === 'remove_text') {
    return {
      type: op.type,
      offset: op.offset,
      text: op.text,
      path: toNumberPath(op.path),
      data: op.data ? op.data.toJS() : {}
    }
  }

  throw new TypeError(`cannot convert op ${JSON.stringify(op)} to sync op`);
}