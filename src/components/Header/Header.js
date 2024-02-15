import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Drawer} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Menu from './Menu';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dinay
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Drawer
      anchor='left'
      open = {isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{width: {xs: '80vw', md: '30vw', lg: '20vw', display: 'flex', justifyContent: 'center'}}} role='presentation'>
          
            <Box sx={{width: '90%', py: 2}}>
                <Box justifyContent='space-between' display='flex' alignItems='center' sx={{borderBottom: '1px solid black', pb: 1}}>
                    <Button onClick={() => setIsDrawerOpen(false)} >
                        <ArrowBackIosIcon sx={{color: 'black'}}/>
                    </Button>

            
                </Box>
                     <Menu/>
                </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
