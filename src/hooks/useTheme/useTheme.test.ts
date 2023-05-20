import { renderHook, act } from '@/tests'
import useTheme from './useTheme'

describe('USE THEME TEST SUITE:', () => {
  it('should return the theme name and toggle theme function', () => {
    const { result } = renderHook(useTheme)
    const { name, toggle } = result.current
    expect(name).toBe('light')
    expect(typeof toggle).toBe('function')
  })

  it('should be able to toggle the theme', () => {
    const { result } = renderHook(useTheme)
    const { toggle } = result.current
    act(toggle)
    const { name: toggled1 } = result.current
    expect(toggled1).toBe('dark')
    act(toggle)
    const { name: toggled2 } = result.current
    expect(toggled2).toBe('light')
  })
})
