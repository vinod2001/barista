import React, { useEffect, useMemo, useState } from 'react'
import { Box, Grid, } from '@mui/material'
import { StateContext } from '../context/StateContext'
import { Header } from '../components/Header'
import { Confirmation } from '../components/Confirmation'

export const OrderConfirmation = () => {
    <Box>
        <Header isBasket={false} />
        <Confirmation/>
    </Box>
}