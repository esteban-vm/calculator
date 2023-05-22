import type { FC } from 'react'
import { useCalculator, useTheme } from '@/hooks'
import * as Styled from './Calculator.styled'

const Calculator: FC = () => {
  const { toggle: toggleTheme } = useTheme()
  const { previous, current, operation, appendValue, clearEntry, clearAll, chooseOperation, getResult, toggleSign } =
    useCalculator()

  return (
    <Styled.Wrapper>
      <Styled.Container aria-label='Calculator'>
        <Styled.Screen>
          <Styled.Previous>
            {previous} {operation}
          </Styled.Previous>
          <Styled.Current>{current}</Styled.Current>
        </Styled.Screen>
        <Styled.Button onClick={clearAll} data-key='shift+backspace' title='All clear (shift+backspace)' control>
          AC
        </Styled.Button>
        <Styled.Button onClick={clearEntry} data-key='backspace' title='Clear entry (backspace)' control>
          CE
        </Styled.Button>
        <Styled.Button onClick={toggleSign} data-key='shift+s' title='Toggle sign (shift+s)' control>
          +/-
        </Styled.Button>
        <Styled.Button onClick={chooseOperation} data-key='/' title='Divide' operation>
          ÷
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='7' title='Seven'>
          7
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='8' title='Eight'>
          8
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='9' title='Nine'>
          9
        </Styled.Button>
        <Styled.Button onClick={chooseOperation} data-key='*' title='Multiply' operation>
          ×
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='4' title='Four'>
          4
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='5' title='Five'>
          5
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='6' title='Six'>
          6
        </Styled.Button>
        <Styled.Button onClick={chooseOperation} data-key='plus' title='Add' operation>
          +
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='1' title='One'>
          1
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='2' title='Two'>
          2
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='3' title='Three'>
          3
        </Styled.Button>
        <Styled.Button onClick={chooseOperation} data-key='minus' title='Subtract' operation>
          -
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='.' title='Decimal point' rounded='left' control>
          .
        </Styled.Button>
        <Styled.Button onClick={appendValue} data-key='0' title='Zero'>
          0
        </Styled.Button>
        <Styled.Button onClick={toggleTheme} data-key='shift+t' title='Toggle theme (shift+t)' control>
          <svg viewBox='0 0 24 24' fill='currentColor' width='3rem' height='3rem'>
            <path d='M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 017.5 2m11.57 1.5l1.43 1.43L4.93 20.5 3.5 19.07 19.07 3.5m-6.18 2.43L11.41 5 9.97 6l.42-1.7L9 3.24l1.75-.12.58-1.65L12 3.1l1.73.03-1.35 1.13.51 1.67m-3.3 3.61l-1.16-.73-1.12.78.34-1.32-1.09-.83 1.36-.09.45-1.29.51 1.27 1.36.03-1.05.87.4 1.31M19 13.5a5.5 5.5 0 01-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15-.24 3.35-2.53-2.2m4.33-2.7l1.15-2.77 2.2 2.54-3.35.23m1.15-4.96l-1.14-2.78 3.34.24-2.2 2.54M9.63 18.93l2.77 1.15-2.53 2.19-.24-3.34z' />
          </svg>
        </Styled.Button>
        <Styled.Button onClick={getResult} data-key='enter' title='Equals' rounded='right' operation>
          =
        </Styled.Button>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Calculator
