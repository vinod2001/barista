import React, { useEffect, useMemo, useState } from 'react'
import { Box, Grid, Button } from '@mui/material'
import { StateContext } from '../context/StateContext'
import { AmountDetails } from './AmountDetails'

export const Confirmation = ({ total, setPlaceOrder, isOrderPlaced }: any) => {
    return (
        <>

            <Box>
                Order Confirmed
                <AmountDetails total={total} setPlaceOrder={setPlaceOrder} isOrderPlaced={isOrderPlaced} />
            </Box>
        </>
    )
}