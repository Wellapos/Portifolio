import { TableCell, tableCellClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    cursor: 'pointer'
  }
}))
