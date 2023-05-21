import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    name: 'light' | 'dark'
    colors: {
      color1: `#${string}`
      color2: `#${string}`
      color3: `#${string}`
      color4: `#${string}`
      color5: `#${string}`
    }
  }
}
