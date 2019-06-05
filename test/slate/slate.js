import assert from 'assert'
import { fixtures } from './helpers/fixtures'
import { Editor } from 'slate'

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
  describe.skip('slate', () => {
    fixtures(__dirname, 'operations', ({ module }) => {
      const { input, output } = module
      const operations = module.default
      const editor = new Editor({ plugins })

      const opts = {
        preserveSelection: true,
        preserveDecorations: true,
      }

      editor.setValue(input)
      operations.forEach(op => editor.applyOperation(op))
      const actual = editor.value.toJSON(opts)

      editor.setValue(output)
      const expected = editor.value.toJSON(opts)
      assert.deepEqual(actual, expected)
    })

    fixtures(__dirname, 'commands', ({ module }) => {
      const { input, output, options = {}, plugins: module_plugins } = module
      const fn = module.default
      const editor = new Editor({
        plugins: module_plugins ? plugins.concat(module_plugins) : plugins,
      })
      const opts = { preserveSelection: true, ...options }

      editor.setValue(input)
      fn(editor)
      const actual = editor.value.toJSON(opts)

      editor.setValue(output)
      const expected = editor.value.toJSON(opts)
      assert.deepEqual(actual, expected)
    })
  });
})
