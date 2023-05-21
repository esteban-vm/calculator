import { css } from '@emotion/react'

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

export const globals = css`
  @import url('css/normalize.min.css');

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
