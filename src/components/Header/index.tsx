import { IconButton, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <Stack
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
      pt={10}
      pb={10}
    >
      <IconButton onClick={() => navigate('/')}>
        <HomeIcon sx={{ color: '#fff' }} />
      </IconButton>
    </Stack>
  )
}
