import type { FC } from 'react'
import { useCalculator, useTheme } from '@/hooks'
import * as Styled from './Calculator.styled'

const Calculator: FC = () => {
  const { name: themeName, toggle: toggleTheme } = useTheme()
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
          {themeName === 'dark' ? '☀️' : '🌑'}
        </Styled.Button>
        <Styled.Button onClick={getResult} data-key='enter' title='Equals' rounded='right' operation>
          =
        </Styled.Button>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Calculator
