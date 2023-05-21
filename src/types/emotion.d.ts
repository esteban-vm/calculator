import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    name: 'light' | 'dark'
    colors: {
      background: {
        primary: string
        secondary: string
      }
      button: {
        basic: string
        control: string
        operation: string
      }
    }
  }
}
