import { DocumentJSON, BlockJSON, InlineJSON, TextJSON, MarkJSON } from "./slate";

// drop key for now since that concerns local state
export type CommonJSONFields = 'object' | 'data';
export type SyncTreeNode = {
  nodes?: SyncNode[];
}

export type SyncDocument = Pick<DocumentJSON, CommonJSONFields> & SyncTreeNode;
export type SyncBlock = Pick<BlockJSON, CommonJSONFields | 'type'> & SyncTreeNode;
export type SyncInline = Pick<InlineJSON, CommonJSONFields | 'type'> & SyncTreeNode;
export type SyncText = Pick<TextJSON, 'object'> & {
  text?: Array<string>
  marks?: Array<SyncMark>
}

export type SyncMark = MarkJSON;

export type SyncNode = SyncDocument | SyncBlock | SyncInline | SyncText;