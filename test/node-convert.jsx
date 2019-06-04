/** @jsx h */

import h from "./slate/helpers/h";

import { toSyncDocument } from "../src";

describe("node-convert", () => {
  describe("document", () => {
    it("loads a document with marks", () => {
      const input = (
        <document>
          <paragraph>
            <b>w</b>
            ord
          </paragraph>
        </document>
      );

      const syncDoc = {
        object: "document",
        data: {},
        nodes: [
          {
            object: "block",
            type: "paragraph",
            data: {},
            nodes: [
              {
                object: "text",
                text: ["w"],
                marks: [{ object: "mark", type: "bold", data: {} }]
              },
              { object: "text", text: ["o", "r", "d"], marks: [] }
            ]
          }
        ]
      };

      expect(toSyncDocument(input.toJSON())).toEqual(syncDoc);
    });
  });
});
