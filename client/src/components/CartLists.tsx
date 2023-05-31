import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { fetchProducts } from '../api/api'
import { Products, Lists, Total } from '../types'
import { CardListItems } from './CartListItems'

const tableWrapper = {
  width: '100%',
  border: '0px solid red',

  '& table': {
    width: '100%',
    color: '#ddd',
    fontSize: '20px',
    '& tr td:nth-child(1)': {
      textalign: 'left',
      borderBottom: '1px solid #444',
      // border: '1px solid #fff',
    },
    '& tr td:nth-child(2)': {
      // border: '1px solid #fff',
      textAlign: 'right',
      borderBottom: '1px solid #444',
    },
    '& tr td': {
      border: '0px solid #fff',
      padding: '15px 10px',
    },
    '& tr:nth-child(4) td': {
      background: '#181a1d',
    },
  },
}

export const CartLists = () => {
  const [list, setList] = useState([])
  const [subTotal, setSubTotal] = useState<Total>()
  useEffect(() => {
    fetch('http://localhost:5000/subTotal')
      .then((res) => res.json())
      .then((data) => setSubTotal(data))

    fetch('http://localhost:5000/cart')
      .then((res) => res.json())
      .then((data) => setList(data))
  }, [])
  return (
    <Box sx={{ width: '50%', margin: '0 auto' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '0px solid #fff',
          m: 2,
        }}
      >
        <Box sx={{ width: '100%' }}>
          {list.map((lists) => (
            <CardListItems lists={lists} />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            mt: 1,
            border: '0px solid #fff',
            width: '50%',
            ml: 5,
          }}
        >
          <Box sx={tableWrapper}>
            <table>
              <tr>
                <td>SubTotal</td>
                <td>₹{subTotal?.subTotal}</td>
              </tr>
              <tr>
                <td>Sales Tax (18%)</td>
                <td>₹{subTotal?.salesTax}</td>
              </tr>
              <tr>
                <td>Discount ({subTotal?.discountPercentage}%)</td>
                <td>₹{subTotal?.discount}</td>
              </tr>
              <tr>
                <td>Grand Total</td>
                <td>₹{subTotal?.grandTotal}</td>
              </tr>
            </table>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
