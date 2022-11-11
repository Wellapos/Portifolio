// import Background from 'global/images/pexels3.jpg'
import { Box, Container, Stack, Typography } from '@mui/material'

import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom'

import { Projects } from 'global/data'
import { Fade } from 'react-awesome-reveal'
import { Project } from 'components/Home/HomeBlock/Projects/Project'

export function ProjectsTemplate() {
  const navigate = useNavigate()
  return (
    <Box bgcolor="black" height="100vh">
      <motion.div
        initial={{ width: '0%' }}
        transition={{ duration: 1 }}
        animate={{ width: '100%' }}
        exit={{ width: '250%' }}
      >
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
          <Stack
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            direction="column"
            height="100%"
            width="100%"
            spacing={3}
            flex={1}
          >
            <Fade direction="up" triggerOnce cascade delay={1000}>
              {Projects.map((project) => (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </Fade>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  )
}
