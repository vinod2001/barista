import React from 'react'
import { Grid } from '@mui/material'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Grid>
    </BrowserRouter>
  )
}

export default App
