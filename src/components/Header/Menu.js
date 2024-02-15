import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Menu() {
  return (
    <List> 
        <ListItem  disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <ListAltIcon />
                </ListItemIcon>
              <ListItemText primary='Jönatmalar' />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <PersonIcon />
                </ListItemIcon>
              <ListItemText primary='Foydalanuvchilar' />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <StorefrontIcon />
                </ListItemIcon>
              <ListItemText primary='Mijozlar' />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <LocalShippingIcon />
                </ListItemIcon>
              <ListItemText primary='Transportlar' />
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default Menu