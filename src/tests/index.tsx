/* eslint-disable react-refresh/only-export-components */
import type { FC, PropsWithChildren, ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ThemeProvider, themes } from '@/styles'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={themes['light']}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
