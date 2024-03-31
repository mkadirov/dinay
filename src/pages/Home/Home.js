import React, { useState, useEffect } from 'react';
import {Button, Box, TextField, Grid, Checkbox, Divider, Typography} from '@mui/material';
import courier from '../../assets/Courier.png'
import { markets, orders, shipmentList, statuses } from '../../data';
import boxLogo from '../../assets/Box.png'
import { useNavigate } from 'react-router-dom';
import BaseLayout from '../../components/Layout/BaseLayout';


function Home() {

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
    }, [])

    const handelClick = (id) => {
        navigate(`/order/${id}`)
    }

    
    const createList = () => {
    
        const shipment = shipmentsList.find(item => item.number == refNum)
        const newList = orders
        setOrderList(newList.filter(item => item.shipmentId == shipment.id))
    }
  
  
   
  
    return (
      <BaseLayout>
         <Box sx={{width: '100vw',  marginTop: 2, position: 'relative' }}>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Box display={'flex'} sx={{margin: 2}}>
              <TextField 
                id="outlined-basic" 
                label="Sendungsnummer" 
                variant="outlined" 
                value={refNum}
                onChange={(e) => setRefNum(e.target.value)}
                size='small'
                />
              <Button variant='contained' onClick={createList}>
                Enter
              </Button>
          
            </Box>
        </Box>
  
        
        <Box sx={{marginTop: 2}}>
            <Divider/>
            {orderList.map((item, index) => {
                const sts = statusList.find(s => s.id == item.statusId)
                const market = marketList.find(m => m.id == item.marketId)
                return (
                    <Box style={{ order: index }} onClick = {() => handelClick(item.id)}>
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
     
        <Box display={orderList==0?'block':'none'} sx={{width: '95vw', height: '75vh',  }}>
            <Box sx={{width: {xs: '30vw', md: '25vw'}, height: {xs: '35vh', md: '50vh'}}} className = 'centered-image-box'>
                <img src={courier} alt="" />
            </Box>
        </Box>
      </Box>
      </BaseLayout>
    );
}

export default Home