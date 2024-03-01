import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import QrCode2Icon from '@mui/icons-material/QrCode2';

function Menu({setIsDrawerOpen}) {

  const navigate = useNavigate()

  const handelNavigate = (link) => {
    navigate(`/${link}`)
    setIsDrawerOpen(false)
  }
  return (
    <List> 
        
          <ListItem  disablePadding onClick={() => handelNavigate('shipments')}>
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
        <ListItem  disablePadding onClick={() => handelNavigate('transports')}>
            <ListItemButton>
                <ListItemIcon>
                   <LocalShippingIcon />
                </ListItemIcon>
              <ListItemText primary='Transportlar' />
            </ListItemButton>
        </ListItem>
        <ListItem  disablePadding onClick={() => handelNavigate('orders')}>
            <ListItemButton>
                <ListItemIcon>
                   <BookmarkBorderIcon/>
                </ListItemIcon>
              <ListItemText primary='Buyurtmalar' />
            </ListItemButton>
        </ListItem>
        
        <ListItem  disablePadding onClick={() => handelNavigate('products')}>
          <ListItemButton>
              <ListItemIcon>
                   <QrCode2Icon/>
              </ListItemIcon>
            <ListItemText primary='Mahsulotlar' />
           </ListItemButton>
        </ListItem>
        
    </List>
  )
}

export default Menu