import type { FC } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

const KeyboardListener: FC = () => {
  const handleKeyEvent = (key: string) => {
    const button = document.querySelector(`[data-key="${key}"]`) as HTMLButtonElement
    const click = new MouseEvent('click', { bubbles: true })
    button.dispatchEvent(click)
    button.classList.add('clicked')
    setTimeout(() => button.classList.remove('clicked'), 200)
  }

  const keys = [
    'numeric',
    'minus',
    'plus',
    '/',
    '*',
    '.',
    'enter',
    'backspace',
    'shift+backspace',
    'shift+s',
    'shift+t',
  ]

  return <KeyboardEventHandler handleKeys={keys} onKeyEvent={handleKeyEvent} />
}

export default KeyboardListener
