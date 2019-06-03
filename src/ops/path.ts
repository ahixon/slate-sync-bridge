import { SyncTreeNode, SyncNode } from "../types/sync";

export const isTreeNode = (node: SyncNode): node is SyncTreeNode => {
  return (<SyncTreeNode>node).object !== 'text';
}

export const walk = (node: SyncTreeNode, path: number[]): SyncNode => {
  return path.reduce((curNode: SyncNode, idx) => {
    if (!isTreeNode(curNode) || !curNode.nodes) {
      throw new TypeError(`path ${path.toString()} does not match tree ${JSON.stringify(node)}`);
    }

    return curNode.nodes[idx];
  }, node as SyncNode);
  // FIXME: ^ that cast is odd
}