import { css, type Theme } from '@emotion/react'

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

enum devices {
  /** smartphones, touchscreens */
  touch = '(hover: none) and (pointer: coarse)',
  /** stylus-based screens */
  stylus = '(hover: none) and (pointer: fine)',
  /** Nintendo Wii controller, Microsoft Kinect */
  other = '(hover: hover) and (pointer: coarse)',
  /** mouse, touch pad */
  mouse = '(hover: hover) and (pointer: fine)',
}

export const mediaQuery = (device: keyof typeof devices) => `@media ${devices[device]}`

export const globalStyles = css`
  @import url('css/normalize.min.css');

  :root {
    --color-white: #fff;
    --color-dark: rgba(60, 64, 67, 0.75);
    --color-darker: #333;
    --color-light: rgba(255, 255, 255, 0.75);
    --color-lighter: rgba(255, 255, 255, 0.9);
  }

  * {
    font-family: sans-serif;
    font-weight: normal;
  }

  html {
    font-size: 16px;

    ${mediaQuery('touch')} {
      font-size: 12px;
    }
  }
`

export * from '@emotion/react'
export { default as styled } from '@emotion/styled'
