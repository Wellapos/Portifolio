import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

export const theme = createTheme(
  {
    typography: {
      fontFamily: 'Poppins Regular',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      allVariants: {
        color: '#363F5F'
      }
    },
    palette: {
      primary: {
        main: '#5429CC'
      },
      secondary: {
        main: '#F0F2F5'
      },
      error: {
        main: '#E62E4D'
      },
      success: {
        main: '#33CC95'
      },
      text: {
        primary: '#363F5F',
        secondary: '#969CB3'
      }
    }
  },
  ptBR
)
