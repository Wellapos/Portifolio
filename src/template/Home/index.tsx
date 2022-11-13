import { HomeBlock } from 'components/Home/HomeBlock'

import { motion } from 'framer-motion'

export function HomeTemplate() {
  return (
    <motion.div>
      <HomeBlock />
    </motion.div>
  )
}
