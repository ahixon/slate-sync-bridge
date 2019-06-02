import { NodeJSON, DocumentJSON } from './types/slate';
import { SyncNode, SyncDocument } from './types/sync';

const createNode = (node: NodeJSON): SyncNode => {
  if (!node.object) {
    throw new TypeError(`cannot create node with missing type`);
  }

  switch(node.object) {
    case 'document':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createNode)
      }
    case 'block':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createNode)
      }
    case 'inline':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createNode)
      }
    case 'text':
      return {
        ...node,
        text: node.text ? Array.from(node.text) : undefined,
      }
  }
}

export const toSyncDocument = (node: DocumentJSON) => createNode(node);

export const toSlateDocument = (node: SyncDocument): NodeJSON => {
  return node;
}