import { Box } from '@mui/material'
import { HomeBlock } from 'components/Home/HomeBlock'

import { motion } from 'framer-motion'

export function HomeTemplate() {
  return (
    <motion.div>
      <Box height="100%" bgcolor="black">
        <HomeBlock />
      </Box>
    </motion.div>
  )
}
