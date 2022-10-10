import { Container, Paper, Stack, Typography } from '@mui/material'
import { DateFormatter } from 'global/functions/DateFormatter'
import { PriceFormatter } from 'global/functions/PriceFormatter'
import { TableProps } from 'global/interfaces/TableProps'
import { useState } from 'react'
import { ModalEdit } from '../ModalEdit'

export function CardMobile({ data }: TableProps) {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState<number | undefined>()
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Listagem</Typography>
        <Typography>{data.length} Itens</Typography>
      </Stack>
      <Stack spacing={2}>
        {data.map((item) => (
          <Paper
            key={item.id}
            onClick={() => {
              setId(item.id)
              setOpen(true)
            }}
            sx={{
              '&:hover': {
                backgroundColor: 'secondary.light'
              },
              cursor: 'pointer'
            }}
          >
            <Container>
              <Typography variant="h4">{item.title}</Typography>
              <Typography
                variant="h6"
                color={item.type === 'withdraw' ? 'error.main' : 'success.main'}
                mb={3}
              >
                {item && item.amount && PriceFormatter({ price: item.amount })}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignContent="flex-end"
              >
                <Typography>{item.category}</Typography>
                <Typography>{DateFormatter({ date: item.date })}</Typography>
              </Stack>
            </Container>
          </Paper>
        ))}
      </Stack>
      {id && (
        <ModalEdit
          open={open}
          setOpen={setOpen}
          id={id}
          data={data}
          setId={setId}
        />
      )}
    </Stack>
  )
}
