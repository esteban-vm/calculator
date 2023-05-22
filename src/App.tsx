import { Calculator, KeyboardListener } from '@/components'
import { useTheme } from '@/hooks'
import { Global, globals, ThemeProvider, themes } from '@/styles'

export default function App() {
  const { name } = useTheme()

  return (
    <>
      <Global styles={globals} />
      <ThemeProvider theme={themes[name]}>
        <Calculator />
      </ThemeProvider>
      <KeyboardListener />
    </>
  )
}
