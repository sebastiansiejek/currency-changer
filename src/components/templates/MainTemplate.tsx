import React, { ReactNode } from 'react'
import GlobalStyles from 'themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import mainTheme from 'themes/mainTheme'

interface IProps {
  children: ReactNode
}

const MainTemplate = ({ children }: IProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
  </>
)

export default MainTemplate
