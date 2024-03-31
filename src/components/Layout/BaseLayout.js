import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../Header/Menu';

const drawerWidth = 240;

function BaseLayout({children}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box onClick={() => navigate('/')} sx={{cursor: 'pointer'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Dinay
            </Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
          //   container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Menu/>
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            <Menu />
          </Drawer>
          <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              
            },
          }}
          open
          >
            <Toolbar elevation={3} sx={{backgroundColor: 'primary.main', color: 'white'}}>
              {/* <p className="text-4xl">Dinay</p> */}
            </Toolbar>
          <Menu setIsDrawerOpen={setMobileOpen}/>
        </Drawer>
        </Box>
  
        {/* <Toolbar/> */}
        <Box
          component="main"
          sx={{ flexGrow: 1,marginTop: 12, 
            paddingTop: 4,
            width: {xs: '100%', sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          
          {children}
        </Box>
      </Box>
    );
}

export default BaseLayout