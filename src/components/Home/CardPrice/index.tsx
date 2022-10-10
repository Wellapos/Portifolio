import { Container, Paper, Stack, Typography } from '@mui/material'
import { CardProps } from 'global/interfaces/CardProps'

export function CardPrice({ value, title, icon, cardFunction }: CardProps) {
  return (
    <Paper
      sx={{ height: '136px', mt: { sm: '10px', md: '-68px' }, pt: '15px' }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          mb={2}
        >
          <Typography variant="h6">{title}</Typography>
          {icon}
        </Stack>
        <Typography variant="h4">
          {cardFunction && cardFunction({ transactions: value })}
        </Typography>
      </Container>
    </Paper>
  )
}
