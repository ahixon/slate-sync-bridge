/** @jsx h */

import h from "./slate/helpers/h";

import { toSyncDocument, applyOperation, toSlateDocument } from "../src";

describe("node-convert", () => {
  describe("references", () => {
    it("loads a document with marks", () => {
      const doc = toSyncDocument((
        <document>
          <paragraph>
            <b>w</b>ord
          </paragraph>
          <paragraph>
            nother
          </paragraph>
        </document>
      ).toJSON());

      const inputSlate = toSlateDocument(doc);

      applyOperation(doc, {
        type: 'insert_text',
        path: [1, 0],
        offset: 0,
        text: 'a',
      });

      const outputSlate = toSlateDocument(doc);

      console.log(JSON.stringify(outputSlate, null, 2));

      // first nodes remains unchanged
      expect(inputSlate.nodes[0]).toBe(outputSlate.nodes[0]);
      expect(inputSlate.nodes[1]).not.toBe(outputSlate.nodes[1]);
    });
  });
});
