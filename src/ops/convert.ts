import { Operation, Path, MarkJSON } from "slate";
import { createSyncNode } from "../node-convert/sync";
import { NodeJSON } from "../types/slate";
import { SyncOperation } from "../types/ops";
import { toNumberPath } from "./path";

// DO NOT spread objects here; source is a Immutable Record
export const toSyncOp = (op: Operation): SyncOperation | null => {
  switch (op.type) {
    case "insert_text":
      return {
        type: op.type,

        offset: op.offset,
        text: op.text,
        path: toNumberPath(op.path),
        marks: op.marks ? op.marks.map(mark => mark.toJSON() as MarkJSON) : []
      };
    case "remove_text":
      return {
        type: op.type,

        offset: op.offset,
        text: op.text,
        path: toNumberPath(op.path)
      };
    case "insert_node":
      return {
        type: op.type,

        path: toNumberPath(op.path),
        node: createSyncNode(op.node.toJSON() as NodeJSON)
      };
    case "move_node":
      return {
        type: op.type,

        path: toNumberPath(op.path),
        newPath: toNumberPath(op.newPath)
      };
    case "remove_node":
      return {
        type: op.type,

        path: toNumberPath(op.path)
      };
    case "split_node":
      return {
        type: op.type,

        path: toNumberPath(op.path),
        position: op.position,
        properties: op.properties
      };
    case "merge_node":
      return {
        type: op.type,

        path: toNumberPath(op.path)
      };
    case "add_mark":
      return {
        type: op.type,

        path: toNumberPath(op.path),
        mark: op.mark.toJSON() as MarkJSON
      };
    case "remove_mark":
      return {
        type: op.type,
        path: toNumberPath(op.path),
        mark: op.mark.toJSON() as MarkJSON
      };
    case "set_node":
      return {
        type: op.type,
        path: toNumberPath(op.path),
        newProperties: op.newProperties
      };
    case "set_mark":
      return {
        type: op.type,
        path: toNumberPath(op.path),
        properties: op.properties,
        newProperties: op.newProperties
      };
    case "set_selection":
    case "set_value":
      // Value-specific operations. These don't apply to doc
      return null;
  }
};
