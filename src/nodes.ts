import { NodeJSON } from './types/slate';
import { SyncNode } from './types/sync';

export const createNode = (node: NodeJSON): SyncNode => {
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