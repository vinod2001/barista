import React, { useEffect, useMemo, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { Header } from '../components/Header'
import { Menus } from '../components/Menus'
import { StateContext } from '../context/StateContext'
import { CartLists } from '../components/CartLists'

export const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:5000/cart')
  //     .then((res) => res.json())
  //     .then((data) => setCartItems(data))
  // }, [])
  return (
    <Grid item xs={12}>
      <Header isBasket={false} />
      <CartLists />
    </Grid>
  )
}
