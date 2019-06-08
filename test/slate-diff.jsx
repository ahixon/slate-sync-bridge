/** @jsx h */

import h from "./slate/helpers/h";

import { applyOperation, toSyncDocument } from "../src";
import { CachedSlateTransformer } from "../src/slate-diff";
import Automerge from "automerge";

const setup = input => {
  const syncJSON = toSyncDocument(input.toJSON());
  const initDoc = Automerge.init();
  const loadedDoc = Automerge.change(initDoc, doc => {
    doc.doc = syncJSON;
  });

  const transformer = new CachedSlateTransformer();
  return {
    transformer,
    loadedDoc
  };
};

describe("slate-diff", () => {
  it("returns the same document if nothing applied", () => {
    const input = (
      <document>
        <paragraph>hello world</paragraph>
        <paragraph>can load two paragraphs</paragraph>
      </document>
    );

    const { transformer, loadedDoc } = setup(input);

    const output = transformer.apply(loadedDoc.doc);
    expect(output.toJSON()).toEqual(input.toJSON());
  });

  it('can apply changes to nested nodes with an empty cache', () => {
    const input = (
      <document>
        <paragraph>
          <paragraph>nested one</paragraph>
          <paragraph>nested two</paragraph>
        </paragraph>
        <paragraph>top level paragraph</paragraph>
      </document>
    );

    const output = (
      <document>
        <paragraph>
          <paragraph>nested one</paragraph>
          <paragraph>nestehd two</paragraph>
        </paragraph>
        <paragraph>top level paragraph</paragraph>
      </document>
    )

    const { transformer, loadedDoc } = setup(input);

    // insert text into the second nested paragraph
    const op = {
      type: "insert_text",
      path: [0, 1, 0],
      offset: 5,
      text: 'h',
    }

    // load the cache
    // transformer.apply(loadedDoc.doc);

    const changedDoc = Automerge.change(loadedDoc, doc => applyOperation(doc.doc, op))
    const changes = Automerge.getChanges(loadedDoc, changedDoc);

    const transformed = transformer.apply(changedDoc.doc, changes);
    expect(transformed.toJSON()).toEqual(output.toJSON());
  })

  it('invalidates parent nodes if children change', () => {
    const input = (
      <document>
        <paragraph>
          <paragraph>nested one</paragraph>
          <paragraph>nested two</paragraph>
        </paragraph>
        <paragraph>top level paragraph</paragraph>
      </document>
    );

    const output = (
      <document>
        <paragraph>
          <paragraph>nested one</paragraph>
          <paragraph>nestehd two</paragraph>
        </paragraph>
        <paragraph>top level paragraph</paragraph>
      </document>
    )

    const { transformer, loadedDoc } = setup(input);

    // insert text into the second nested paragraph
    const op = {
      type: "insert_text",
      path: [0, 1, 0],
      offset: 5,
      text: 'h',
    }

    // load the cache
    transformer.apply(loadedDoc.doc);

    const changedDoc = Automerge.change(loadedDoc, doc => applyOperation(doc.doc, op))
    const changes = Automerge.getChanges(loadedDoc, changedDoc);

    const transformed = transformer.apply(changedDoc.doc, changes);
    expect(transformed.toJSON()).toEqual(output.toJSON());
  })

  // it('returns the same document if nothing applied, filling cache first', () => {
  //   transformer.fillCache(syncJSON, input);

  //   const output = transformer.apply(loadedDoc.doc)
  //   expect(output.toJSON()).toEqual(input.toJSON());
  // })

  it("maintains value reference for unchanged nodes", () => {
    const input = (
      <document>
        <paragraph>
          hello world here is a long string
        </paragraph>
      </document>
    );

    const output = (
      <document>
        <paragraph>is a long string</paragraph>
        <paragraph>hello world here </paragraph>
      </document>
    );

    const { transformer, loadedDoc } = setup(input);

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
      },
      {
        path: [1],
        newPath: [0],
        type: "move_node"
      }
    ];


    let lastDoc = loadedDoc;
    let lastTransformed;

    ops.forEach(op => {
      const updatedDoc = Automerge.change(lastDoc, doc => applyOperation(doc.doc, op))
      const changes = Automerge.getChanges(lastDoc, updatedDoc);

      lastTransformed = transformer.apply(updatedDoc.doc, changes);
      lastDoc = updatedDoc;
    });

    expect(lastTransformed.toJSON()).toEqual(output.toJSON());
  });
});
