import { render, cleanup, screen, userEvent } from '@/tests'
import Calculator from './Calculator'

describe('CALCULATOR TEST SUITE:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Calculator />))
  })

  afterEach(cleanup)

  describe('style tests:', () => {
    it('should have correct styles', () => {
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('render tests:', () => {
    it('should render the buttons for numbers', () => {
      const numbers = [...Array(10).keys()]
      for (const num of numbers) expect(screen.getByRole('button', { name: String(num) })).toBeInTheDocument()
    })

    it('should render the button for all clear', () => {
      expect(screen.getByRole('button', { name: /ac/i, description: /all clear/i })).toBeInTheDocument()
    })

    it('should render the button to clear entry', () => {
      expect(screen.getByRole('button', { name: /ce/i, description: /clear entry/i })).toBeInTheDocument()
    })

    it('should render the button to toggle sign', () => {
      expect(screen.getByRole('button', { name: /\+\/-/, description: /toggle sign/i })).toBeInTheDocument()
    })

    it('should render the button for division', () => {
      expect(screen.getByRole('button', { name: /÷/, description: /divide/i })).toBeInTheDocument()
    })

    it('should render the button for multiplication', () => {
      expect(screen.getByRole('button', { name: /×/, description: /multiply/i })).toBeInTheDocument()
    })

    it('should render the button for addition', () => {
      expect(screen.getByRole('button', { name: /\+/, description: /add/i })).toBeInTheDocument()
    })

    it('should render the button for subtraction', () => {
      expect(screen.getByRole('button', { name: /-/, description: /subtract/i })).toBeInTheDocument()
    })

    it('should render the button for decimal point', () => {
      expect(screen.getByRole('button', { name: /\./, description: /decimal point/i })).toBeInTheDocument()
    })

    it('should render the button to toggle theme', () => {
      expect(screen.getByRole('button', { description: /toggle theme/i })).toBeInTheDocument()
    })

    it('should render the button for equals', () => {
      expect(screen.getByRole('button', { name: /=/, description: /equals/i })).toBeInTheDocument()
    })
  })

  describe('control tests:', () => {
    it('should vibrate when pressing a button', async () => {
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      expect(navigator.vibrate).toHaveBeenCalledWith(50)
    })

    it('should not be able to write numbers of more than 10 digits', async () => {
      for (let time = 1; time <= 11; time++) {
        await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      }
      expect(await screen.findByText(/1{10}/)).toBeInTheDocument()
    })

    it('should be able to clear all (e.g. 51 => "")', async () => {
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      expect(await screen.findByText(/51/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /ac/i, description: /all clear/i }))
      expect(screen.queryByText(/51/)).not.toBeInTheDocument()
    })

    it('should be able to clear entry (e.g. 958 => 95)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /9/, description: /nine/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      await userEvent.click(screen.getByRole('button', { name: /8/, description: /eight/i }))
      expect(await screen.findByText(/958/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /ce/i, description: /clear entry/i }))
      expect(screen.queryByText(/958/)).not.toBeInTheDocument()
      expect(await screen.findByText(/95/)).toBeInTheDocument()
    })

    it('should be able to toggle sign (e.g. 80 => -80)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /8/, description: /eight/i }))
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      await userEvent.click(screen.getByRole('button', { name: /\+\/-/, description: /toggle sign/i }))
      expect(await screen.findByText(/-80/)).toBeInTheDocument()
    })

    it('should not be able to toggle sign if current value does not exist', async () => {
      await userEvent.click(screen.getByRole('button', { name: /\+\/-/, description: /toggle sign/i }))
      expect((await screen.findByRole('banner')).children[1]).not.toHaveTextContent('-')
    })

    it('should not be able to choose operation if current value does not exist', async () => {
      await userEvent.click(screen.getByRole('button', { name: /\+/, description: /add/i }))
      expect((await screen.findByRole('banner')).children[0]).not.toHaveTextContent('+')
    })

    it('should not be able to write a zero as first digit (e.g. 050 => 50)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      expect(screen.queryByText(/050/)).not.toBeInTheDocument()
      expect(await screen.findByText(/50/)).toBeInTheDocument()
    })

    it('should be able to append a decimal point (e.g. 5.9)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      await userEvent.click(screen.getByRole('button', { name: /\./, description: /decimal point/i }))
      await userEvent.click(screen.getByRole('button', { name: /9/, description: /nine/i }))
      expect(await screen.findByText(/5\.9/)).toBeInTheDocument()
    })

    it('should be able to append a decimal point preceded by a zero (e.g. "." => 0.)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /\./, description: /decimal point/i }))
      expect(await screen.findByText(/0\./)).toBeInTheDocument()
    })

    it('should not be able to append a decimal point if already there is one', async () => {
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      await userEvent.click(screen.getByRole('button', { name: /\./, description: /decimal point/i }))
      await userEvent.click(screen.getByRole('button', { name: /\./, description: /decimal point/i }))
      expect(screen.queryByText(/1\.\./)).not.toBeInTheDocument()
      expect(await screen.findByText(/1\./)).toBeInTheDocument()
    })

    it('should be able to toggle theme', async () => {
      expect(localStorage.getItem('calculator:theme')).toBe('"light"')
      await userEvent.click(screen.getByRole('button', { description: /toggle theme/i }))
      expect(localStorage.getItem('calculator:theme')).toBe('"dark"')
    })
  })

  describe('operation tests:', () => {
    it('should add two numbers (e.g. 53 + 17)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      await userEvent.click(screen.getByRole('button', { name: /3/, description: /three/i }))
      expect(await screen.findByText(/53/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /\+/, description: /add/i }))
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      await userEvent.click(screen.getByRole('button', { name: /7/, description: /seven/i }))
      expect(await screen.findByText(/17/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(await screen.findByText(/70/)).toBeInTheDocument()
    })

    it('should subtract two numbers (e.g. 75 - 10)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /7/, description: /seven/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      expect(await screen.findByText(/75/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /-/, description: /subtract/i }))
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      expect(await screen.findByText(/10/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(await screen.findByText(/65/)).toBeInTheDocument()
    })

    it('should multiply two numbers (e.g. 20 × 15)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /2/, description: /two/i }))
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      expect(await screen.findByText(/20/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /×/, description: /multiply/i }))
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      expect(await screen.findByText(/15/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(await screen.findByText(/300/)).toBeInTheDocument()
    })

    it('should divide two numbers (e.g. 325 ÷ 25)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /3/, description: /three/i }))
      await userEvent.click(screen.getByRole('button', { name: /2/, description: /two/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      expect(await screen.findByText(/325/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /÷/, description: /divide/i }))
      await userEvent.click(screen.getByRole('button', { name: /2/, description: /two/i }))
      await userEvent.click(screen.getByRole('button', { name: /5/, description: /five/i }))
      expect(await screen.findByText(/^25/)).toBeInTheDocument()
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(await screen.findByText(/13/)).toBeInTheDocument()
    })

    it('should not divide by zero', async () => {
      await userEvent.click(screen.getByRole('button', { name: /1/, description: /one/i }))
      await userEvent.click(screen.getByRole('button', { name: /÷/, description: /divide/i }))
      await userEvent.click(screen.getByRole('button', { name: /0/, description: /zero/i }))
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(screen.queryByText(Infinity.toString())).not.toBeInTheDocument()
    })

    it('should be able to perform all operations (e.g. (6 × 4 - 3 + 8) ÷ 9)', async () => {
      await userEvent.click(screen.getByRole('button', { name: /6/, description: /six/i }))
      await userEvent.click(screen.getByRole('button', { name: /×/, description: /multiply/i }))
      await userEvent.click(screen.getByRole('button', { name: /4/, description: /four/i }))
      await userEvent.click(screen.getByRole('button', { name: /-/, description: /subtract/i }))
      await userEvent.click(screen.getByRole('button', { name: /3/, description: /three/i }))
      await userEvent.click(screen.getByRole('button', { name: /\+/, description: /add/i }))
      await userEvent.click(screen.getByRole('button', { name: /8/, description: /eight/i }))
      await userEvent.click(screen.getByRole('button', { name: /÷/, description: /divide/i }))
      await userEvent.click(screen.getByRole('button', { name: /9/, description: /nine/i }))
      await userEvent.click(screen.getByRole('button', { name: /=/, description: /equals/i }))
      expect(await screen.findByText(/3\.22/)).toBeInTheDocument()
    })
  })
})
