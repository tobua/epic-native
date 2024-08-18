import { expect, test } from 'bun:test'
import { MyText } from '../index'

test('Renders regular JSX tags.', () => {
  expect(MyText).toBeDefined()
})
