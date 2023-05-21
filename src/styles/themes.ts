import type { Theme } from '@emotion/react'

const light: Theme = {
  name: 'light',
  colors: {
    background: {
      primary: '#56ccf2',
      secondary: '#2f80ed',
    },
    button: {
      basic: '#ffffffbf',
      control: 'skyblue',
      operation: 'gray',
    },
  },
}

const dark: Theme = {
  name: 'dark',
  colors: {
    background: {
      primary: '#56ccf2',
      secondary: '#2f80ed',
    },
    button: {
      basic: '#ffffffbf',
      control: 'skyblue',
      operation: 'gray',
    },
  },
}

export const themes: Record<Theme['name'], Theme> = { light, dark }
