import { NodeJSON, DocumentJSON } from '../types/slate';
import { SyncNode } from '../types/sync';

export const createSyncNode = (node: NodeJSON): SyncNode => {
  if (!node.object) {
    throw new TypeError(`cannot create node with missing type`);
  }

  switch(node.object) {
    case 'document':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSyncNode)
      }
    case 'block':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSyncNode)
      }
    case 'inline':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSyncNode)
      }
    case 'text':
      return {
        ...node,
        text: node.text ? Array.from(node.text) : [],
        marks: node.marks || []
      }
  }
}

export const toSyncDocument = (node: DocumentJSON) => createSyncNode(node);