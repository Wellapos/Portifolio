import { Paper, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface IPaperProps {
  children: ReactNode
}

export function TablePaper({ children }: IPaperProps) {
  return (
    <Stack>
      <Paper elevation={0}>
        <Typography component="h2">{children}</Typography>
      </Paper>
    </Stack>
  )
}
