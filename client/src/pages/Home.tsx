import React, { useMemo, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { Header } from '../components/Header'
import { Menus } from '../components/Menus'
import { StateContext } from '../context/StateContext'

export const Home = () => {
  // const [cartLists, setCartLists] = useState([])
  return (
    <Grid item xs={12}>
      {/* <StateContext.Provider value={{ cartLists, setCartLists }}> */}
      <Header isBasket={true} />
      <Menus />
      {/* </StateContext.Provider> */}
    </Grid>
  )
}
