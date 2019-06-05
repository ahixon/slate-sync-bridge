import assert from 'assert'
import { fixtures } from './helpers/fixtures'
import { Editor, Value } from 'slate'
import { applyOperation } from '../../src';
import { toSyncDocument, toSlateDocument } from '../../src/node-convert';

import Automerge from 'automerge';

const plugins = [
  {
    schema: {
      blocks: {
        image: {
          isVoid: true,
        },
      },
      inlines: {
        emoji: {
          isVoid: true,
        },
      },
      marks: {
        result: {
          isAtomic: true,
        },
      },
    },
  },
]

describe('slate integration', () => {
  describe('automerge', () => {
    fixtures(__dirname, 'operations', ({ module }) => {
      const { input, output } = module
      const operations = module.default

      const inputSyncDoc = toSyncDocument(input.document.toJSON())
      const initAutomergeDoc = Automerge.init();
      const emptyAutomergeDoc = Automerge.change(initAutomergeDoc, automergeDoc => {
        automergeDoc.doc = inputSyncDoc;
      });

      const changedAutomergeDoc = Automerge.change(emptyAutomergeDoc, automergeDoc => {
        operations.forEach(op => applyOperation(automergeDoc.doc, op));
      })

      // check our rep matched
      const expectedDoc = output.document.toJSON();
      const actualDoc = toSlateDocument(changedAutomergeDoc.doc);
      assert.deepEqual(actualDoc, expectedDoc);
    })

    fixtures(__dirname, 'commands', ({ module }) => {
      const { input, output, options = {}, plugins: module_plugins } = module
      const fn = module.default
      const editor = new Editor({
        plugins: module_plugins ? plugins.concat(module_plugins) : plugins,
      })

      const inputSyncDoc = toSyncDocument(input.document.toJSON());
      const initAutomergeDoc = Automerge.init();
      const emptyAutomergeDoc = Automerge.change(initAutomergeDoc, automergeDoc => {
        automergeDoc.doc = inputSyncDoc;
      });
      
      editor.setValue(input)
      fn(editor)
      
      // re-apply the operations from the test
      const changedAutomergeDoc = Automerge.change(emptyAutomergeDoc, automergeDoc => {
        editor.operations.forEach(op => applyOperation(automergeDoc.doc, op));
      })
      const actualDoc = toSlateDocument(changedAutomergeDoc.doc)

      editor.setValue(output);
      const expectedDoc = editor.value.document.toJSON()
      assert.deepEqual(actualDoc, expectedDoc)
    })
  });
})
