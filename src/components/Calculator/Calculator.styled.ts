import { styled, css, mediaQuery } from '@/styles'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  ${({ theme }) => {
    return css`
      background: linear-gradient(to right, ${theme.colors.color1}, ${theme.colors.color2});
    `
  }}
`

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(7, calc(100% / 7));
  width: 400px;
  height: 650px;
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;

  ${mediaQuery('touch')} {
    width: 90%;
    height: 70%;

    @media (orientation: landscape) {
      width: 50%;
      height: 90%;
    }
  }
`

export const Screen = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  background-color: #3c4043bf;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const Previous = styled.div`
  color: #ffffffbf;
  font-size: 1.5rem;
`

export const Current = styled.div`
  color: #fff;
  font-size: 3rem;
`

type ButtonProps = { rounded?: 'right' | 'left'; operation?: boolean; control?: boolean }

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  border: 1px outset #fff;
  outline: none;

  :active {
    transform: scale(0.98);
  }

  ${mediaQuery('mouse')} {
    :hover {
      background-color: #ffffffe6;
    }
  }

  ${({ rounded }) => {
    if (rounded) {
      return css`
        border-bottom-${rounded}-radius: 10px;
      `
    }
  }}

  ${({ control, operation, theme }) => {
    return css`
      background-color: ${theme.colors[control ? 'color4' : operation ? 'color3' : 'color5']};
    `
  }}
`
