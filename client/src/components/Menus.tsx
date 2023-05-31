import React, { useState, useEffect, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { fetchProducts } from '../api/api'
import { Products, Lists } from '../types'
import { CardItems } from './CardItems'
import { Combo } from './Combo'
import { StateContext } from '../context/StateContext'

export const Menus = () => {
  const { setProductLists } = useContext<any>(StateContext)
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => { setMenuList(data); setProductLists(data) })
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        border: '0px solid red',
        m: 2,
      }}
    >
      <Box sx={{}}>
        <Box sx={{
          color: '#d17844',
          fontSize: '25px',
          fontWeight: 'bold',
          mb: 2,
        }}>
          Combo Offers
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'left', mb: 3 }}>
          <Combo />
        </Box>
        {menuList.map((items: Products, index: number) => (
          <Box key={index}>
            <Box
              sx={{
                color: '#d17844',
                fontSize: '25px',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {items.categoryName}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'left', mb: 3 }}>
              {items.lists.map((data: Lists, index: number) => (
                <CardItems key={index} lists={data} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
