import { Container, Stack, Typography } from '@mui/material'

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function AboutTemplate() {
  const navigate = useNavigate()

  return (
    <motion.div>
      <Container maxWidth="lg">
        <Stack justifyContent="center" alignItems="flex-end" pt={20}>
          <Typography
            variant="h6"
            onClick={() => navigate('/')}
            sx={{ cursor: 'pointer' }}
          >
            Home
          </Typography>
        </Stack>
      </Container>
    </motion.div>
  )
}
