import { SyncTreeNode, SyncNode, SyncDocument } from "../types/sync";

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

export const getAncestor = (doc: SyncDocument, path: number[], level=1): [SyncNode, number] => {
  const [idx, ancestor] = ancestorPath(path, level);
  return [walk(doc, ancestor), idx]
}

export const ancestorPath = (path: number[], level=1): [number, number[]] => {
  if (level > path.length)  {
    throw new TypeError('requested ancestor is higher than root')
  }

  return [path[path.length - level], path.slice(0, path.length - level)]
}

export const incrementPath = (path: number[]) => {
  const [idx, parentPath] = ancestorPath(path);
  return parentPath.concat([idx + 1]);
}

export const decrementPath = (path: number[]) => {
  const [idx, parentPath] = ancestorPath(path);
  const prevIdx = idx - 1;
  if (prevIdx < 0) {
    throw new TypeError(`node at path ${path} has no sibling before it`);
  }
  
  return parentPath.concat([prevIdx]);
}