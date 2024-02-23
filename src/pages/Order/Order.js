import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Button, Divider, Grid, Typography} from '@mui/material'
import { markets, orderProducts, orders } from '../../data';
import OrderInfoCard from '../../components/Cards/OrderInfoCard';
import OrderProductCard from '../../components/Cards/OrderProductCard';

function Order() {

  const {id} = useParams();
  const [list, setList] = useState([])
  

  useEffect(() => {
    setList(orderProducts.filter(item => item.orderId == id))
  }, [id])
    
  return (
    <Box marginTop={3} >
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid  item xs = {11}>
          <OrderInfoCard id={id}/>
          <Divider sx={{marginY: 3}}/>
            <Box textAlign={'center'}>
              <Button variant='contained'>
              Buyurtma qilingan mahsulotlar
              </Button>
            </Box>
          <Box>
            {
              Array.isArray(list) && list.map((item, idx) => {
                return (
                  <OrderProductCard item={item} key={idx}/> 
                )
              })
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Order