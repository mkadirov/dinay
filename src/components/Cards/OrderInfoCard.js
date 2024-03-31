import React, {useState, useEffect} from 'react'
import {Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import { markets, orders } from '../../data';
import { grey } from '@mui/material/colors';

function OrderInfoCard({id}) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [order, setOrder] = useState('')
  const [market, setMarket] = useState('')


useEffect(() => {
    setOrder(orders.find(item => item.id == id))
}, [id])

useEffect(() => {
    setMarket(markets.find(item => id == order.marketId))
}, [order])

const getCurrentLocation = () => {
    // Check if Geolocation is supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          // Set the current location as the start location
          setStartLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported');
    }
  };

  const handleNavigation = (loc) => {
    getCurrentLocation();
    setEndLocation(loc)
    // Construct the Google Maps URL with the start and end locations
    const mapsUrl = `https://www.google.com/maps/dir/${startLocation}/${endLocation}`;

    // Open the URL in a new tab or window
    window.open(mapsUrl, '_blank');
  };

    

  return (
    <Card sx={{ minWidth: 275, backgroundColor: grey[200] }}> 
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Buyurtma raqami:
            </Typography>
            <Typography variant="h5" component="div">
             {order?.number}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Qabul qiluvchi: <p style={{color: 'black', display: 'inline'}}>{market?.name}</p>
            </Typography>
            <Typography variant="body2">
              {market?.adresse}
            </Typography>
            </CardContent>
            <CardActions>
            <Button 
              variant='contained'  
              size="small"
              onClick={() => handleNavigation(market.location)}
            >
              Go
            </Button>
        </CardActions>
    </Card>
  )
}

export default OrderInfoCard