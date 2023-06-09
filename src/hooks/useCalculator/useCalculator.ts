import { useState, type MouseEventHandler } from 'react'

type Operation = '' | '÷' | '×' | '+' | '-'

const useCalculator = () => {
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState<Operation>('')

  const appendValue: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (current.length === 10) return
    const value = event.currentTarget.textContent as string
    if (value !== '.' && current === '0') setCurrent(value)
    else if (value === '.' && current.includes(value)) return
    else if (value === '.' && current === '') setCurrent('0'.concat(value))
    else setCurrent(current.concat(value))
  }

  const clearEntry = () => {
    setCurrent(current.slice(0, -1))
  }

  const clearAll = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
  }

  const chooseOperation: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!current) return
    else if (previous) setPrevious(compute())
    else setPrevious(Number(current).toString())
    setCurrent('')
    setOperation(event.currentTarget.textContent as Operation)
  }

  const getResult = () => {
    const result = compute()
    if (!result) return
    setCurrent(result)
    setPrevious('')
    setOperation('')
  }

  const toggleSign = () => {
    if (!current) return
    setCurrent(String(-current))
  }

  const compute = () => {
    let result = ''
    const previousNumber = Number(previous)
    const currentNumber = Number(current)
    if (currentNumber === 0) return result

    switch (operation) {
      case '÷':
        result = String(Number((previousNumber / currentNumber).toFixed(5)))
        break
      case '×':
        result = String(previousNumber * currentNumber)
        break
      case '+':
        result = String(previousNumber + currentNumber)
        break
      case '-':
        result = String(previousNumber - currentNumber)
        break
    }

    return result
  }

  return { previous, current, operation, appendValue, clearEntry, clearAll, chooseOperation, getResult, toggleSign }
}

export default useCalculator
