/* eslint-disable multiline-ternary */
import { Stack, Typography } from '@mui/material'
import { useState } from 'react'

const LightSpeed = require('react-reveal/LightSpeed')

interface IProject {
  title: string
  description: string
}

export function Project({ title, description }: IProject) {
  const [isTouch, setIsTouch] = useState(false)
  return (
    <Stack
      key={title}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      direction="column"
      height="100%"
      width="100%"
      spacing={3}
      onMouseEnter={() => setIsTouch(true)}
      onMouseLeave={() => setIsTouch(false)}
    >
      {isTouch ? (
        <LightSpeed bottom>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h6" color="red">
            {description}
          </Typography>
        </LightSpeed>
      ) : (
        <>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h6" color="red">
            {description}
          </Typography>
        </>
      )}
    </Stack>
  )
}
