import React, { useState, useEffect } from 'react';
import {Button, Box, TextField, Grid, Checkbox, Divider, Typography} from '@mui/material';
import { markets, orders, shipmentList, statuses } from '../../data';
import boxLogo from '../../assets/Box.png'
import { useNavigate, useParams } from 'react-router-dom';
import BaseLayout from '../../components/Layout/BaseLayout';

function Orders() {
    const [marketList, setMarketList] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [list, setList] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        setMarketList(markets);
        setStatusList(statuses);
        setList(orders)
    }, [])

    const handelClick = (id) => {
        navigate(`/order/${id}`)
    }




    
  return (
    <BaseLayout>
      <Box sx={{width: '100vw',  marginTop: 2, position: 'relative' }}>

<Box sx={{marginTop: 2}}>
    <Divider/>
    {list.map((item, index) => {
        const sts = statusList.find(s => s.id == item.statusId)
        const market = marketList.find(m => m.id == item.marketId)
        return (
            <Box sx={{cursor: 'pointer', '&:hover': {
                backgroundColor: 'grey.300',
              }}}  onClick = {() => handelClick(item.id)}>
                <Grid container >
                    <Grid item xs={2} md = {1} padding={1}>
                        <Box className="image-box">
                            <img src={boxLogo}  />
                        </Box>
                    </Grid>
                    <Grid item xs={7} md = {7} >
                        <Box marginLeft={2} sx={{marginY: 1}}>
                            <Typography style={{fontSize: '14px'}}>
                                Order NR: {item.number}
                            </Typography>
                            <Typography style={{fontSize: '14px'}}>
                                Qabul qiluvchi: {market?.name}
                            </Typography>
                            <Typography style={{fontSize: '14px'}}>
                                Manzil: {market.adresse}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} md = {4} >
                        <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                            <Box  sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{width: {xs: '45px'}}}>
                                    <img src={sts.logo} alt="" />
                                </Box>
                            </Box>
                            <Typography sx={{fontSize: '9px'}} >
                                {sts.name}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                
                <Divider/>
            </Box>
        )
    })}
</Box>
</Box>
    </BaseLayout>
  )
}

export default Orders