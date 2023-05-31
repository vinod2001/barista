import React, { useMemo, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { StateContext } from './context/StateContext'
import App from './App'

export const AppStart = () => {
  const [cartLists, setCartLists] = useState([])
  const [cartNumber, setCartNumber] = useState([])
  const [productLists, setProductLists] = useState([])
  return (
    <Grid item xs={12}>
      <StateContext.Provider
        value={{ cartLists, setCartLists, cartNumber, setCartNumber, productLists, setProductLists }}
      >
        <App />
      </StateContext.Provider>
    </Grid>
  )
}
