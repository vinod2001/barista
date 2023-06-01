import React, { useEffect, useMemo, useState, useContext } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { StateContext } from '../context/StateContext'
import { Total } from '../types'
import { Link } from 'react-router-dom'


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
export const AmountDetails = ({ total, setPlaceOrder, isOrderPlaced }: any) => {
    const { cartLists, setCartLists } = useContext<any>(StateContext)
    useEffect(() => {
        if (isOrderPlaced) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([]),
            }
            fetch('http://localhost:5000/cart', requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    // setCartNumber(data)
                    setCartLists([])
                })
                .catch((error) => { console.log(error.data) })
        }
    }, [])
    return (
        <Box sx={tableWrapper}>
            <table>
                <tr>
                    <td>SubTotal</td>
                    <td>₹{total?.subTotal}</td>
                </tr>
                <tr>
                    <td>Sales Tax (18%)</td>
                    <td>₹{total?.salesTax}</td>
                </tr>
                <tr>
                    <td>Discount ({total?.discountPercentage}%)</td>
                    <td>₹{total?.discount}</td>
                </tr>
                <tr>
                    <td>Grand Total</td>
                    <td>₹{total?.grandTotal}</td>
                </tr>
            </table>
            {!isOrderPlaced ? (
                <Button variant="contained" sx={{ width: '100%' }} onClick={() => setPlaceOrder(true)}>Place Order</Button>) :
                (
                    <Link to="/">
                        <Button onClick={() => setPlaceOrder(false)} sx={{ width: '100%' }} variant="contained">Back</Button >
                    </Link>
                )
            }
        </Box >
    )
}