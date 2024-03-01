import React, { useState, useEffect } from 'react';
import {Button, Box, TextField, Grid, Checkbox, Divider, Typography} from '@mui/material';
import courier from '../../assets/Courier.png'
import { markets, orders, shipmentList, statuses } from '../../data';
import boxLogo from '../../assets/Box.png'
import { useNavigate, useParams } from 'react-router-dom';

function Shipment() {

    const {id} = useParams();
    const [orderList, setOrderList] = useState([])
    const [refNum, setRefNum] = useState('')
    const [marketList, setMarketList] = useState([]);
    const [statusList, setStatusList] = useState([]);
    const [shipmentsList, setShipmentsList] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=> {
        setMarketList(markets);
        setStatusList(statuses);
        setShipmentsList(shipmentList);
        createList();
    }, [])

    const handelClick = (id) => {
        navigate(`/order/${id}`)
    }

    
    const createList = () => {
        const newList = orders
        setOrderList(newList.filter(item => item.shipmentId == id))
    }
  return (
    <Box sx={{width: '100vw',  marginTop: 2, position: 'relative' }}>

    <Box sx={{marginTop: 2, paddingX: 5}}>
        <Divider/>
        {orderList.map((item, index) => {
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
                                    Qabul qiluvchi: {market.name}
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
  )
}

export default Shipment