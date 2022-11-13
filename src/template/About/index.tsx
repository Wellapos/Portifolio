import { Container, Stack, Typography } from '@mui/material'
import { Header } from 'components/Header'

import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'

export function AboutTemplate() {
  return (
    <motion.div
      initial={{ width: '0%', height: '0%' }}
      transition={{ duration: 1.5 }}
      animate={{ width: '100%', height: '0%' }}
      exit={{ width: '300%', height: '0vh' }}
    >
      <Container maxWidth="lg">
        <Header />
        <Fade direction="up" triggerOnce cascade delay={750}>
          <Stack mb={20}>
            <Typography variant="h1">
              Front End developer & Tech enthusiast.
            </Typography>
          </Stack>
          <Typography variant="h4" py={5}>
            I&apos;m a Front End developer with a passion for learning new
            technologies. and building cool stuff.
          </Typography>
          <Typography variant="h4" py={5}>
            I&apos;m currently working as a Front End developer at a company
            called AngelLira in Chapecó, Santa Catarina, Brazil.
          </Typography>
          <Typography variant="h4" py={5}>
            I&apos;m also a Tech enthusiast, I love to learn new technologies
            and build cool stuff with them.
          </Typography>
          <Typography variant="h4" py={5}>
            I&apos;m currently learning React Native and NodeJs.
          </Typography>
        </Fade>
      </Container>
    </motion.div>
  )
}
