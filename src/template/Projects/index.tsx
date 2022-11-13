// import Background from 'global/images/pexels3.jpg'
import { Container, Stack } from '@mui/material'

import { motion } from 'framer-motion'

import { Projects } from 'global/data'
import { Fade } from 'react-awesome-reveal'
import { Project } from 'components/Projects/Project'
import { Header } from 'components/Header'

export function ProjectsTemplate() {
  return (
    <motion.div
      initial={{ width: '0%' }}
      transition={{ duration: 1.5 }}
      animate={{ width: '100%' }}
      exit={{ width: '300%', height: '0vh' }}
    >
      <Container maxWidth="lg">
        <Header />
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
                LongDescription={project.LongDescription}
              />
            ))}
          </Fade>
        </Stack>
      </Container>
    </motion.div>
  )
}
