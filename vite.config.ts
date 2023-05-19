/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/utils/tests.setup.ts',
    reporters: 'verbose',
    resolveSnapshotPath(path, extension) {
      return path.replace(/\.test\.([tj]sx?)/, `.test.$1${extension}`)
    },
  },
})
