import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { products } from '../../data'
import ProductCard from '../../components/Cards/ProductCard'

function Products() {
    const list = products
  return (
    <Box marginTop={3}>
        <Box textAlign={'center'} >
            <Typography variant='h4' marginY={4}>
                Mahsulotlar
            </Typography>

            <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
                {
                    list.map((item, idx) => {
                        const key = item.id + idx
                        return(
                            <Grid key={key} item xs= {11} md={6} lg= {3}>
                                <ProductCard item={item}/> 
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    </Box>
  )
}

export default Products