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
  width: '250px',
  height: '300px',
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

export const CardItems = ({ lists }: any) => {
  const { cartLists, setCartLists } = useContext<any>(StateContext)

  const addToCart = async (id: number, comboId: number) => {
    //setCartLists([id])
    const lists = { comboId: comboId, id: id }
    setCartLists([lists])
  }

  return (
    <Card sx={coffeeWrapper}>
      <CardContent>
        <div className="name">{lists.name}</div>
        <div>
          <img src={lists.url} />
        </div>
        <div className="wrapperPrice">
          <div className="price">
            <span>₹</span>
            {lists.price}
          </div>
          <button className="add" onClick={() => addToCart(lists.id, lists.comboId)}>
            +
          </button>
        </div>
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  )
}
