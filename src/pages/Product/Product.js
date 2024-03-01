import { Box, Button } from '@mui/material'
import React from 'react'

function Product() {

    const powerSet = function(arr) {
        if (arr.length === 0) {
            return [[]];
        }
        const lastElement = arr.pop();

        const restPowerset = powerSet(arr);
    
        const powerset = [];
        
        for (let i = 0; i < restPowerset.length; i++) {
            const set = restPowerset[i];
            powerset.push(set);
            const setWithLastElement = [...set]; 
            setWithLastElement.push(lastElement);
            powerset.push(setWithLastElement);
        }
        return powerset;
    };
    
    
    const arr = [2, 2, 3, 4, 6, 7, 7, 9];
    const result = powerSet(arr);
    

    const newArray = (result.filter(item => item.length>1)).map(subArray => {
        return {
            array: subArray,
            sum: subArray.reduce((acc, num) => acc + num, 0)
        };
    });
    newArray.sort((a, b) => b.sum - a.sum);
    const damas = newArray.find(item => item.sum <= 21)
    console.log(damas);


  return (
    <Box marginTop={5}>
        <Button>
            OK
        </Button>
    </Box>
  )
}

export default Product