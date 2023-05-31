import React, { useState, useContext, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Lists } from '../types'
import { StateContext } from '../context/StateContext'

const coffeeWrapper = {
  width: '100%',
  height: '200px',
  padding: '14px',
  borderRadius: '35px',
  // background: 'rgb(20, 25, 33)',
  background: `linear-gradient(
    130deg,
    rgba(20, 25, 33, 1) 0%,
    rgb(41, 41, 41) 30%,
    rgba(12, 16, 21, 1) 100%
  )`,
  boxSizing: 'border-box',
  transition: 'all ease 1s',
  marginBottom: '10px',
  color: '#fff',
  border: '1px solid #444',
  marginRight: '10px',
  '& :hover': {
    opacity: '1',
    filter: 'blur(0)',
  },
  '& img': {
    width: '100%',
    marginBottom: '8px',
    borderRadius: '25px',
    height: '140px',
    objectFit: 'cover',
  },
  '& .name': {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
    width: '200px',
  },
  '& .wrapperPrice': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  '& .add': {
    width: '30px',
    height: '30px',
    background: '#d17844',
    border: 'none',
    borderRadius: '11px',
    color: 'white',
    fontWeight: '900',
    //fontFamily: 'Nunito',
    fontSize: '20px',
    textAlign: 'center',
    paddingBottom: '2px',
    cursor: 'pointer',
  },
  '& .price': {
    marginTop: '16px',
    color: 'white',
    //fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: '18px',
  },
  '& span': {
    color: '#d17844',
  },
}

export const CardListItems = ({ lists }: any) => {
  return (
    <Card sx={coffeeWrapper}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '0px solid #fff',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Box sx={{ border: '0px solid #fff', width: '20%', height: '100%' }}>
            <img src={lists.url} />
          </Box>
          <Box className="name" sx={{ ml: 2 }}>
            {lists.name}
          </Box>

          <button className="add">+</button>
          <button className="add">-</button>
          <Box className="price" sx={{ ml: 5 }}>
            <span>₹</span>
            {lists.price}
          </Box>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
