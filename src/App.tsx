import { Calculator } from '@/components'
import { Global, globalStyles } from '@/styles'

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Calculator />
    </>
  )
}
