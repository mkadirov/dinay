import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { products } from '../../data';

function OrderProductCard({item}) {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('')
    
    useEffect(() => {
        setProduct(products.find(prod => prod.id == item.productId))
    }, [item])

    const handelClick = () => {
        if(quantity.trim() == '' || quantity == item.quantity) {
            setQuantity(item.quantity)
        } else {
            alert('Buyurtma qilinganidan köp mahsulot topshirish uchun buyurtmani özgartiring')
            setQuantity('');
        } 
    }

  return (
    <Card sx={{ minWidth: 275, marginTop: 2}} >
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs = {9}>
                    <Typography  color="text.secondary">
                        Barcode: <p style={{color: 'black', display: 'inline'}}>{product?.articleNumber}</p>
                    </Typography>
                    <Typography  color="text.secondary">
                        Nomi: <p style={{color: 'black', display: 'inline'}}>Dinay {product?.name}</p>
                    </Typography>
                    <Typography  color="text.secondary">
                        Hajmi: <p style={{color: 'black', display: 'inline'}}>{product?.volum} L</p>
                    </Typography>
                </Grid>

                <Grid item xs = {3}>
                    <Box sx={{marginBottom: 1}}>
                        <TextField 
                            label={item.quantity} 
                            variant="standard"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Box>
                    <Button 
                        variant='contained' 
                        size='small'
                        onClick={handelClick}
                    >
                        OK
                    </Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default OrderProductCard