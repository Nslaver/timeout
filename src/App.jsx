import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Home from 'components/Home'
import theme from 'shared/theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
  }
}

export default App
