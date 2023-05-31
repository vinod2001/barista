import React, { useState, useEffect, useContext } from 'react'
import { Box, Grid, Card, CardActions, CardContent, Button } from '@mui/material'
import { fetchProducts } from '../api/api'
import { ComboListType, ComboType } from '../types'
import { CardListItems } from './CartListItems'
import { StateContext } from '../context/StateContext'

type CartList = {
    discount: string,
    id: string,
    name: string
    numAdded: number,
    price: number,
    url: string
}
const coffeeWrapper = {
    width: '400px',
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
    display: 'flex',
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
export const Combo = () => {
    const { productLists, setCartLists } = useContext<any>(StateContext)
    const [comboList, setComboList] = useState([])
    const [selectedCombos, setSelectedCombos] = useState<any>([])

    const addComboToCart = (items: ComboType["combo"], fullItems: ComboType) => {
        // console.log(items);
        for (let s in productLists) {
            for (let i in productLists[s].lists) {
                for (let obj in items) {
                    if (productLists[s].lists[i].name === items[obj].item) {
                        const lists = { comboId: fullItems.comboId, id: productLists[s].lists[i].id }
                        setSelectedCombos((prevLists: any) => [...prevLists, productLists[s].lists[i].id]);
                        /*setCartLists((prevLists: any) => [...prevLists, productLists[s].lists[i].id])*/
                        setCartLists((prevLists: any) => [...prevLists, lists])
                    }
                }
            }
        }


    };
    useEffect(() => {

        fetch('http://localhost:5000/combo')
            .then((res) => res.json())
            .then((data) => setComboList(data))
            .catch((error) => console.log(error.data))

        // console.log(productLists)
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>

            {comboList.map((items: ComboType, index) => (
                <Box key={`${index}_comboWrapper`} >

                    < Card sx={coffeeWrapper}>
                        <CardContent sx={{ border: '0px solid red', width: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                {
                                    items.combo.map((data: ComboListType, index1) => (
                                        <Box key={`${index1}_combo`} sx={{ border: '0px solid #fff', }}>

                                            <div className="name">{data.item}</div>
                                            <div>
                                                <img src={data.url} alt={data.item} title={data.item} />
                                            </div>



                                        </Box>
                                    ))
                                }
                            </Box>
                            <Box sx={{ wdith: '100%', border: '0px solid #fff' }}>
                                <div className="wrapperPrice">
                                    <div className="price">
                                        Discount : <span>{items.discount}%</span>
                                        { }
                                    </div>
                                    <button className="add" onClick={() => addComboToCart(items.combo, items)}>
                                        +
                                    </button>
                                </div>
                            </Box>
                        </CardContent>
                    </Card>


                </Box>
            ))
            }


            {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}

        </Box >
    )
}