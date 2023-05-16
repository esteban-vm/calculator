import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('css/normalize.min.css');

  :root {
    --color-lighter-blue: #56ccf2;
    --color-darker-blue: #2f80ed;
  }

  * {
    font-family: sans-serif;
    font-weight: normal;
  }

  body {
    text-align: center;
    background: linear-gradient(to right, var(--color-lighter-blue), var(--color-darker-blue));
  }
`

export * from '@emotion/react'
export { default as styled } from '@emotion/styled'
