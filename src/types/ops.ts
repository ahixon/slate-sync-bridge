import { SyncMark, SyncNode } from "../types/sync";
import { MarkProperties } from "slate";

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

export type SyncSplitNodeOperation = {
  type: "split_node";
  path: number[];
  position: number;
  properties: {};
}

export type SyncMergeNodeOperation = {
  type: "merge_node";
  path: number[];
}

export type SyncAddMarkOperation = {
  type: "add_mark";
  path: number[];
  mark: SyncMark;
}

export type SyncRemoveMarkOperation = {
  type: "remove_mark";
  path: number[];
  mark: SyncMark;
}

export type SyncSetNodeOperation = {
  type: "set_node";
  path: number[];
  newProperties: any;
}

export type SyncMarkProperties = {
  type?: string;
  data?: Record<string, any>;
}

export type SyncSetMarkOperation = {
  type: "set_mark";
  path: number[];
  properties: SyncMarkProperties;
  newProperties: SyncMarkProperties;
}

export type SyncOperation =
  | SyncInsertTextOperation
  | SyncRemoveTextOperation
  | SyncInsertNodeOperation
  | SyncMoveNodeOperation
  | SyncRemoveNodeOperation
  | SyncSplitNodeOperation
  | SyncMergeNodeOperation
  | SyncAddMarkOperation
  | SyncRemoveMarkOperation
  | SyncSetNodeOperation
  | SyncSetMarkOperation;