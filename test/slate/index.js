import assert from 'assert'
import { fixtures } from './helpers/fixtures'
import { Editor, Value } from 'slate'
import { applyOperation } from '../../src';
import { toSyncDocument, toSlateDocument } from '../../src/node-convert';

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
  describe('sync-bridge', () => {
    fixtures(__dirname, 'operations', ({ module }) => {
      const { input, output } = module
      const operations = module.default

      const inputSyncDoc = toSyncDocument(input.document.toJSON())
      const actualSyncDoc = operations.reduce((doc, op) => applyOperation(doc, op), inputSyncDoc);

      // check our rep matched
      const expectedDoc = output.document.toJSON();
      const actualDoc = toSlateDocument(actualSyncDoc);
      assert.deepEqual(expectedDoc, actualDoc);
    })

    fixtures(__dirname, 'commands', ({ module }) => {
      const { input, output, options = {}, plugins: module_plugins } = module
      const fn = module.default
      const editor = new Editor({
        plugins: module_plugins ? plugins.concat(module_plugins) : plugins,
      })
      const opts = { preserveSelection: true, ...options }
      if (Object.keys(options).length) {
        throw new TypeError('bad test, cannot use options yet');
      }

      const inputSyncDoc = toSyncDocument(input.document.toJSON());
      
      editor.setValue(input)
      fn(editor)
      
      // re-apply the operations from the test
      const actualSyncDoc = editor.operations.reduce((doc, op) => applyOperation(doc, op), inputSyncDoc);
      const actualDoc = toSlateDocument(actualSyncDoc)

      editor.setValue(output);
      const expectedDoc = editor.value.document.toJSON()
      assert.deepEqual(actualDoc, expectedDoc)
    })
  });

  // describe.skip('slate', () => {
  //   fixtures(__dirname, 'operations', ({ module }) => {
  //     const { input, output } = module
  //     const operations = module.default
  //     const editor = new Editor({ plugins })

  //     const opts = {
  //       preserveSelection: true,
  //       preserveDecorations: true,
  //     }

  //     editor.setValue(input)
  //     operations.forEach(op => editor.applyOperation(op))
  //     const actual = editor.value.toJSON(opts)

  //     editor.setValue(output)
  //     const expected = editor.value.toJSON(opts)
  //     assert.deepEqual(actual, expected)
  //   })

  //   fixtures(__dirname, 'commands', ({ module }) => {
  //     const { input, output, options = {}, plugins: module_plugins } = module
  //     const fn = module.default
  //     const editor = new Editor({
  //       plugins: module_plugins ? plugins.concat(module_plugins) : plugins,
  //     })
  //     const opts = { preserveSelection: true, ...options }

  //     editor.setValue(input)
  //     fn(editor)
  //     const actual = editor.value.toJSON(opts)

  //     editor.setValue(output)
  //     const expected = editor.value.toJSON(opts)
  //     assert.deepEqual(actual, expected)
  //   })
  // });
})
