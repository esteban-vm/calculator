import { renderHook } from '@/tests'
import useTheme from './useTheme'

describe('USE THEME TEST SUITE:', () => {
  it('should return the initial theme name', () => {
    const { result } = renderHook(useTheme)
    expect(result.current.name).toBe('light')
  })

  it('should return a function to toggle the theme', () => {
    const { result } = renderHook(useTheme)
    expect(typeof result.current.toggle).toBe('function')
  })
})
