import { Box, Typography } from '@mui/material'
import Background from 'global/images/pexels3.jpg'

export function ProjectsTemplate() {
  return (
    <Box height="100vh" bgcolor="black">
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundColor: 'black',
          height: '100vh'
        }}
      >
        <Typography variant="h1">Projetos</Typography>
      </Box>
    </Box>
  )
}
