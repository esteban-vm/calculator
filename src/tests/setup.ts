import '@testing-library/jest-dom'
import { Crypto } from '@peculiar/webcrypto'
import { createSerializer } from '@emotion/jest'
import { configure } from '@testing-library/react'

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({ media: query, matches: true }))
  window.crypto = new Crypto()
  expect.addSnapshotSerializer(createSerializer())
  configure({ throwSuggestions: true })
})
