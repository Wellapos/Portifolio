import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from 'global/styles/theme'
import { HomePage } from 'pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
