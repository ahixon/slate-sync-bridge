import { DocumentJSON, BlockJSON, InlineJSON, TextJSON, MarkJSON } from "./slate";

export type SyncTreeNode = {
  object: string;
  nodes?: SyncNode[];
}

export type SyncDocument = Pick<DocumentJSON, 'object' | 'data'> & SyncTreeNode;
export type SyncBlock = Pick<BlockJSON, 'object' | 'data' | 'type'> & SyncTreeNode;
export type SyncInline = Pick<InlineJSON, 'object' | 'data' | 'type'> & SyncTreeNode;
export type SyncText = {
  object: 'text';
  text: Array<string>;
  marks: Array<SyncMark>;
}

export type SyncMark = MarkJSON;

export type SyncNode = SyncDocument | SyncBlock | SyncInline | SyncText;