import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/font.css'

export const responsiveTheme = createTheme(
  {
    typography: {
      fontFamily: 'Poppins Regular',
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      allVariants: {
        color: '#fff'
      }
    }
  },
  ptBR
)

export const theme = responsiveFontSizes(responsiveTheme)
