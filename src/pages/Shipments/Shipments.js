import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, Card, Typography, Grid} from '@mui/material'
import { regions, shipmentList, statuses, transports, users, warehouses } from '../../data'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Shipments() {
    const navigate = useNavigate();
    const rows = shipmentList
    
  return (
    <Box sx={{marginTop: 3, paddingX: 5}}>
      <Box sx={{marginY: 2, textAlign: 'center'}}>
        <Typography variant='h5'>
          Jönatmalar röyxati
        </Typography>
      </Box>
      <TableContainer component={Paper} sx={{display: {xs: 'none', md: 'block'}}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor: 'grey.500'}}>
          <TableRow>
            <TableCell >RefNumber</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Transport</TableCell>
            <TableCell align="right">Lager</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick = {() => navigate(`/shipment/${row.id}`)}
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer', '&:hover': {
                backgroundColor: 'grey.300',
              } }}
              
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{users.find(item => item.id == row.userID).name}</TableCell>
              <TableCell align="right">{transports.find(item => item.id == row.transportID).name}</TableCell>
              <TableCell align="right">{warehouses.find(item => item.id == row.warehouseID).name}</TableCell>
              <TableCell align="right">{regions.find(item => item.id == row.regionID).name}</TableCell>
              <TableCell align="right">{statuses.find(item => item.id == row.statusID).name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default Shipments