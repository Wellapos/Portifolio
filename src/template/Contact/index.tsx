import { Container, Stack, Typography } from '@mui/material'
import { Header } from 'components/Header'

import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'

export function ContactTemplate() {
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
          <Stack>
            <Typography variant="h1">Contact</Typography>
            <Typography variant="h4" py={5}>
              If you want to contact me, you can send me an email at &nbsp; my
              <a
                href="mailto:wellington258@live.com"
                style={{ color: '#008DC5' }}
              >
                {' '}
                E-mail
              </a>{' '}
              or you can find me on &nbsp;
              <a href="https://www.linkedin.com/in/wellington-chagas-de-campos-8494b2219/">
                Linkedin
              </a>
              .
            </Typography>
          </Stack>
        </Fade>
      </Container>
    </motion.div>
  )
}
