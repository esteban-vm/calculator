import '@testing-library/jest-dom'
import { Crypto } from '@peculiar/webcrypto'
import { configure } from '@testing-library/react'
import { createSerializer } from '@emotion/jest'

beforeAll(() => {
  expect.addSnapshotSerializer(createSerializer())
  window.matchMedia = vi.fn()
  window.crypto = new Crypto()
  configure({ throwSuggestions: true })
})
