/** @jsx h */

import h from "./slate/helpers/h";

import { applyOperation, toSlateDocument, toSyncDocument } from "../src";
import Automerge from 'automerge';

const ops = [
  {
    path: [0, 0],
    position: 17,
    properties: {data: {}},
    type: "split_node"
  },
  {
    path: [0],
    position: 1,
    properties: {type: "paragraph", data: {}},
    type: "split_node",
  }
]

describe('automerge', () => {
  it('can split two nodes in a single automerge change without causing an exception', () => {
    const input = (
      <document>
        <paragraph>
          hello world here is a long string
        </paragraph>
      </document>
    );

    const output = (
      <document>
        <paragraph>hello world here </paragraph>
        <paragraph>is a long string</paragraph>
      </document>
    );

    const doc = toSyncDocument(input.toJSON());
    const initDoc = Automerge.init();
    const loadedDoc = Automerge.change(initDoc, syncDoc => {
      syncDoc.doc = doc;
      ops.forEach(op => applyOperation(syncDoc.doc, op))
    })

    expect(toSlateDocument(loadedDoc.doc)).toEqual(output.toJSON());
  })
})