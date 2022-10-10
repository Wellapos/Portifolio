import { Stack } from '@mui/material'
import { TableProps } from 'global/interfaces/TableProps'
import { CardMobile } from '../CardMobile'
import { TableTemplate } from '../TableCustom'

export function TableAndCardMobile({ data }: TableProps) {
  return (
    <Stack>
      <Stack sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <TableTemplate data={data} />
      </Stack>
      <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <CardMobile data={data} />
      </Stack>
    </Stack>
  )
}
