/* eslint-disable multiline-ternary */
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Fade } from 'react-awesome-reveal'

const LightSpeed = require('react-reveal/LightSpeed')

export function HomeBlock() {
  const [isTouch, setIsTouch] = useState(false)
  const [isTouch2, setIsTouch2] = useState(false)
  const [isTouch3, setIsTouch3] = useState(false)

  return (
    <Box height="100vh">
      <Stack
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        direction="row"
        height="100%"
        spacing={3}
        flex={1}
      >
        <Stack width="50%">
          <Fade direction="up" triggerOnce cascade>
            <Stack
              onMouseEnter={() => setIsTouch(true)}
              onMouseLeave={() => setIsTouch(false)}
            >
              {isTouch ? (
                <LightSpeed bottom>
                  <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <Typography variant="h1">Projetos</Typography>
                  </Link>
                </LightSpeed>
              ) : (
                <Typography variant="h1">Olá!</Typography>
              )}
            </Stack>
            <Stack
              onMouseEnter={() => setIsTouch2(true)}
              onMouseLeave={() => setIsTouch2(false)}
            >
              {isTouch2 ? (
                <LightSpeed bottom>
                  <Typography variant="h1">Contato</Typography>
                </LightSpeed>
              ) : (
                <Typography variant="h1" color="red">
                  Eu sou o
                </Typography>
              )}
            </Stack>
            <Stack
              onMouseEnter={() => setIsTouch3(true)}
              onMouseLeave={() => setIsTouch3(false)}
            >
              {isTouch3 ? (
                <LightSpeed>
                  <Typography variant="h1">Sobre mim</Typography>
                </LightSpeed>
              ) : (
                <Typography variant="h1" color="red">
                  Wellington!
                </Typography>
              )}
            </Stack>
          </Fade>
        </Stack>
      </Stack>
    </Box>
  )
}
