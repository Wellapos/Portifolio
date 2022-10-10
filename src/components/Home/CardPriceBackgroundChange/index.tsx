import { Container, Paper, Stack, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { Total } from 'template/Home/functions/Total'
import { CardProps } from 'global/interfaces/CardProps'

export function CardPriceBackgroundChange({ value }: CardProps) {
  return (
    <Paper
      sx={{
        height: '136px',
        mt: { sm: '10px', md: '-68px' },
        pt: '15px',
        bgcolor:
          Total({ transactions: value }).match(/-/) !== null
            ? 'error.main'
            : 'success.main'
      }}
    >
      <Container component={Stack} color="white">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" color="inherit">
            Total
          </Typography>
          <AttachMoneyIcon fontSize="large" />
        </Stack>
        <Typography variant="h4" color="inherit">
          {Total({ transactions: value })}
        </Typography>
      </Container>
    </Paper>
  )
}
