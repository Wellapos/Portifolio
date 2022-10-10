import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { TablePaper } from 'components/Home/TablePaper'
import { DateFormatter } from 'global/functions/DateFormatter'
import { PriceFormatter } from 'global/functions/PriceFormatter'
import { TableProps } from 'global/interfaces/TableProps'
import { useState } from 'react'
import { ModalEdit } from '../ModalEdit'
import { StyledTableCell } from '../StyledTableCell'

export function TableTemplate({ data }: TableProps) {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState<number | undefined>()

  return (
    <TableContainer component={TablePaper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Título</StyledTableCell>
            <StyledTableCell>Preço</StyledTableCell>
            <StyledTableCell>Categoria</StyledTableCell>
            <StyledTableCell>Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => {
                setId(item.id)
                setOpen(true)
              }}
              sx={{
                '&:hover': {
                  backgroundColor: 'secondary.light'
                }
              }}
            >
              <StyledTableCell>
                <Typography>{item.title}</Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: '30%' }}>
                <Typography
                  sx={{
                    color:
                      item.type === 'withdraw' ? 'error.main' : 'success.main'
                  }}
                >
                  {item.amount && item.type === 'withdraw'
                    ? PriceFormatter({ price: -item.amount })
                    : item.amount && PriceFormatter({ price: item.amount })}
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: '20%' }}>
                <Typography color="text.secondary">{item.category}</Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: '10%' }}>
                <Typography color="text.secondary">
                  {DateFormatter({ date: item.date })}
                </Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        {id && (
          <ModalEdit
            open={open}
            setOpen={setOpen}
            id={id}
            data={data}
            setId={setId}
          />
        )}
      </Table>
    </TableContainer>
  )
}
