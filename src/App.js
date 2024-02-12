import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, Box, TextField, Grid, Checkbox} from '@mui/material';
import { locations } from './data';
import logo from './assets/Box.png'
//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [list, setList] = useState([])
  const [refNum, setRefNum] = useState('')
  // const [marketId, setMarketId] = useState(0);
  // const [index, setIndex] = useState(0)
  

  // const handleCheckboxChange = () => {
  //   setIndex(prev => prev + 1);
  //   if(index <= list.length) {
  //     setMarketId(list[index].shopId)
  //   }
  // };



  const createList = () => {
    const newList = locations
    setList(newList.filter(item => item.refNumber == refNum))
  }


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
    <Box sx={{width: '100vw',  marginTop: 2}}>
      <Box display={'flex'} sx={{margin: 2}}>
        <TextField 
          id="outlined-basic" 
          label="Sendungsnummer" 
          variant="outlined" 
          value={refNum}
          onChange={(e) => setRefNum(e.target.value)}
          />
        <Button variant='contained' onClick={createList}>
          Enter
        </Button>
        
      </Box>

      {/* <Button variant='contained' onClick={handleNavigation}>
          go
      </Button> */}
      <Grid container spacing={2}>
      {list.map((item, index) => (
        <Grid item xs={2} key={index} sx={{marginTop: 2}}>
          <Box style={{ order: index }}>
            {/* <Box className="image-box">
              <img src={logo}  />
            </Box> */}

            <Button variant='outlined' onClick={ ()=> handleNavigation(item.location)}>
              {item.shopId}
            </Button>
            
          </Box>
        </Grid>
      ))}
    </Grid>
      
    </Box>
  );
}

export default App;
