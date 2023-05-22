import '@testing-library/jest-dom'
import { createSerializer } from '@emotion/jest'
import { configure } from '@testing-library/react'

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation(() => ({ matches: true }))
  expect.addSnapshotSerializer(createSerializer())
  configure({ throwSuggestions: true })
})
