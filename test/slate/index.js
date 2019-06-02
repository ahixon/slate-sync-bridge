import assert from 'assert'
import { fixtures } from 'slate-dev-test-utils'
import { Editor, Value } from 'slate'

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

  // The hyperscript editor has the schema, but the test
  // editor doesn't! It needs to live in the tests instead.

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
})
