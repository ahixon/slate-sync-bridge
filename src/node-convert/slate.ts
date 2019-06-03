import { NodeJSON } from '../types/slate';
import { SyncNode, SyncDocument } from '../types/sync';

export const createSlateNode = (node: SyncNode): NodeJSON  => {
  if (!node.object) {
    throw new TypeError(`cannot create node with missing type`);
  }

  switch(node.object) {
    case 'document':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSlateNode)
      }
    case 'block':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSlateNode)
      }
    case 'inline':
      return {
        ...node,
        nodes: node.nodes && node.nodes.map(createSlateNode)
      }
    case 'text':
      return {
        ...node,
        text: node.text.join(''),
      }
  }
}

export const toSlateDocument = (node: SyncDocument) => createSlateNode(node);