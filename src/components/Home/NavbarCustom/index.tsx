import { AppBar, Button, Container, Stack, Typography } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

import { useState } from 'react'

import { ModalCustom } from '../ModalCustom'

export function NavbarCustom() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <AppBar
      position="static"
      sx={{ width: '100vw', height: '212px', pb: '32px' }}
      elevation={0}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Stack direction="row" spacing={1}>
            <MonetizationOnIcon color="success" fontSize="large" />
            <Typography variant="h6" fontWeight="bold" color="#fff">
              dt money
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6933FF',
              borderRadius: '8px',
              color: '#fff'
            }}
            onClick={handleOpen}
          >
            Nova transação
          </Button>
        </Stack>
      </Container>
      <ModalCustom open={open} setOpen={setOpen} />
    </AppBar>
  )
}
