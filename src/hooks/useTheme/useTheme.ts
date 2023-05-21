import type { Theme } from '@/styles'
import useLocalStorage from 'use-local-storage'

const useTheme = () => {
  const { matches } = matchMedia('(prefers-color-scheme: light)')
  const [themeName, setThemeName] = useLocalStorage<Theme['name']>('calculator:theme', matches ? 'light' : 'dark')

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { name: themeName, toggle: toggleTheme }
}

export default useTheme
