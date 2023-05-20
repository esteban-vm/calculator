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
        <Styled.Button control onClick={clearAll} title='All clear'>
          AC
        </Styled.Button>
        <Styled.Button control onClick={clearEntry} title='Clear entry'>
          CE
        </Styled.Button>
        <Styled.Button control onClick={toggleSign} title='Toggle sign'>
          +/-
        </Styled.Button>
        <Styled.Button operation onClick={chooseOperation} title='Divide'>
          ÷
        </Styled.Button>
        {[7, 8, 9].map((value) => (
          <Styled.Button key={crypto.randomUUID()} onClick={appendValue}>
            {value}
          </Styled.Button>
        ))}
        <Styled.Button operation onClick={chooseOperation} title='Multiply'>
          ×
        </Styled.Button>
        {[4, 5, 6].map((value) => (
          <Styled.Button key={crypto.randomUUID()} onClick={appendValue}>
            {value}
          </Styled.Button>
        ))}
        <Styled.Button operation onClick={chooseOperation} title='Add'>
          +
        </Styled.Button>
        {[1, 2, 3].map((value) => (
          <Styled.Button key={crypto.randomUUID()} onClick={appendValue}>
            {value}
          </Styled.Button>
        ))}
        <Styled.Button operation onClick={chooseOperation} title='Subtract'>
          -
        </Styled.Button>
        <Styled.Button rounded='left' control onClick={appendValue} title='Decimal point'>
          .
        </Styled.Button>
        <Styled.Button onClick={appendValue}>0</Styled.Button>
        <Styled.Button control onClick={toggleTheme}>
          {themeName === 'dark' ? '☀️' : '🌑'}
        </Styled.Button>
        <Styled.Button rounded='right' operation onClick={getResult} title='Equals'>
          =
        </Styled.Button>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Calculator
