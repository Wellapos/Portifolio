import { Box, Container, Grid } from '@mui/material'

import { useEffect, useState } from 'react'

import { NavbarCustom } from 'components/Home/NavbarCustom'
import { CardPriceBackgroundChange } from 'components/Home/CardPriceBackgroundChange'
import { ArrowDown, ArrowUp } from 'global/icons'
import { CardPrice } from 'components/Home/CardPrice'
import { TableAndCardMobile } from 'components/Home/TableAndCardMobile'

import { getData } from 'service/gets/getData'
import { Incoming } from './functions/Incoming'
import { Outgoing } from './functions/Outgoing'

import { Transaction } from 'global/interfaces/Transaction'

export function HomeTemplate() {
  const [data, setData] = useState<Transaction[] | []>([])

  useEffect(() => {
    ;(async () => {
      const response = await getData()
      setData(response)
    })()
  }, [])

  return (
    <Box bgcolor="secondary.main" height="100%">
      <NavbarCustom />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardPrice
              title="Entradas"
              value={data}
              cardFunction={Incoming}
              icon={<ArrowUp />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardPrice
              title="Saídas"
              value={data}
              cardFunction={Outgoing}
              icon={<ArrowDown />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CardPriceBackgroundChange value={data} />
          </Grid>
        </Grid>
        <TableAndCardMobile data={data} />
      </Container>
    </Box>
  )
}
