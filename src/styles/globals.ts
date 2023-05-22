import { css } from '@emotion/react'

const globals = css`
  @import url('css/normalize.min.css');

  * {
    font-family: sans-serif;
    font-weight: normal;
  }

  html {
    font-size: 16px;

    @media (pointer: coarse) {
      font-size: 12px;
    }
  }

  .clicked,
  button:active {
    transform: scale(0.98);
  }
`

export default globals
