import { renderHook } from '@/tests'
import useCalculator from './useCalculator'

describe('USE CALCULATOR TEST SUITE:', () => {
  it('should return the correct initial values', () => {
    const { result } = renderHook(useCalculator)
    const { current, previous, operation } = result.current
    expect(current).toBe('')
    expect(previous).toBe('')
    expect(operation).toBe('')
  })

  it('should return the functions to update those values', () => {
    const { result } = renderHook(useCalculator)
    const { appendValue, clearEntry, clearAll, chooseOperation, getResult, toggleSign } = result.current
    expect(typeof appendValue).toBe('function')
    expect(typeof clearEntry).toBe('function')
    expect(typeof clearAll).toBe('function')
    expect(typeof chooseOperation).toBe('function')
    expect(typeof getResult).toBe('function')
    expect(typeof toggleSign).toBe('function')
  })
})
