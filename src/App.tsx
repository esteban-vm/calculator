import { Calculator } from '@/components'
import { useTheme } from '@/hooks'
import { Global, globalStyles, ThemeProvider, themes } from '@/styles'

export default function App() {
  const { name } = useTheme()

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={themes[name]}>
        <Calculator />
      </ThemeProvider>
    </>
  )
}
