import { renderHook } from '@/tests'
import useCalculator from './useCalculator'

describe('USE CALCULATOR TEST SUITE', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(useCalculator)
    expect(result.current.current).toBe('')
    expect(result.current.previous).toBe('')
    expect(result.current.operation).toBe('')
  })

  it('should return the functions to update those values', () => {
    const { result } = renderHook(useCalculator)
    expect(typeof result.current.appendValue).toBe('function')
    expect(typeof result.current.clearEntry).toBe('function')
    expect(typeof result.current.clearAll).toBe('function')
    expect(typeof result.current.chooseOperation).toBe('function')
    expect(typeof result.current.getResult).toBe('function')
    expect(typeof result.current.toggleSign).toBe('function')
  })
})
