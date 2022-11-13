/* eslint-disable multiline-ternary */
import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LightSpeed = require('react-reveal/LightSpeed')

interface IProject {
  title: string
  description: string
  LongDescription: string
}

export function Project({ title, description, LongDescription }: IProject) {
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
          <Link to={`/project/${title}`} style={{ textDecoration: 'none' }}>
            <Stack alignItems="center" justifyContent="center" my={3}>
              <Typography variant="h1">{title}</Typography>
              <Typography variant="h6" color="#008DC5">
                {description}
              </Typography>
              <Typography variant="h6" color="#008DC5">
                {LongDescription}
              </Typography>
            </Stack>
          </Link>
        </LightSpeed>
      ) : (
        <>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h6" color="#008DC5">
            {description}
          </Typography>
        </>
      )}
    </Stack>
  )
}
