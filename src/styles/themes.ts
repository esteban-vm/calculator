import type { Theme } from '@emotion/react'

const light: Theme = {
  name: 'light',
  colors: {
    color1: '#ff3f7b',
    color2: '#ff766e',
    color3: '#ffc78c',
    color4: '#fffbc4',
    color5: '#fffbe7',
  },
}

const dark: Theme = {
  name: 'dark',
  colors: {
    color1: '#120907',
    color2: '#162032',
    color3: '#395b7d',
    color4: '#60a1d5',
    color5: '#7de3e5',
  },
}

const themes: Record<Theme['name'], Theme> = { light, dark }

export default themes
