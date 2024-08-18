import Bun, { Glob } from 'bun'
import flowRemoveTypes from 'flow-remove-types'

// @ts-ignore Required for React Native
globalThis.__DEV__ = true

// Removes flow type annotations that cannot be parsed by Bun from 'react-native' package.
const glob = new Glob('node_modules/react-native/**/*.js')
// @ts-ignore module: "preserve" required for imports to work.
for await (const file of glob.scan('.')) {
  const contents = await Bun.file(file).text()
  await Bun.write(file, flowRemoveTypes(contents).toString())
}
