import fs from 'fs'
import { basename, extname, resolve } from 'path'
import { KeyUtils } from 'slate'

export const fixtures = (...args) => {
  let fn = args.pop()
  let options = { skip: false }

  if (typeof fn !== 'function') {
    options = fn
    fn = args.pop()
  }

  const path = resolve(...args)
  const files = fs.readdirSync(path)
  const dir = basename(path)
  const d = options.skip ? describe.skip : describe

  // Ensure that the key generator is reset. We have to do this here
  // because the `require` call will create the Slate objects.
  beforeEach(() => {
    KeyUtils.resetGenerator()
  });

  d(dir, () => {
    for (const file of files) {
      const p = resolve(path, file)
      const stat = fs.statSync(p)

      if (stat.isDirectory()) {
        fixtures(path, file, fn)
      }

      if (
        stat.isFile() &&
        (file.endsWith('.js') || file.endsWith('.jsx')) &&
        !file.startsWith('.') &&
        // Ignoring `index.js` files allows us to use the fixtures directly
        // from the top-level directory itself, instead of only children.
        file !== 'index.js'
      ) {
        const name = basename(file, extname(file))

        const module = require(p)
        const i = module.skip ? it.skip : it;
        
        i(name, function() {
          fn({ name, path, module })
        })
      }
    }
  })
}

fixtures.skip = (...args) => {
  fixtures(...args, { skip: true })
}
