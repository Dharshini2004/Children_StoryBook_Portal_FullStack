import { Button } from '@mui/material'
import React from 'react'

function ButtonComponent({backgroundColor,text,event}) {
  return (
    <Button sx={{
        backgroundColor:backgroundColor?backgroundColor:"transparent",
        ":hover":{
                    boxShadow:"10px 10px 20px black",
                }
                
    }}
    onClick={event?event:()=>{}}
    variant="contained">{text}</Button>
  )
}

export default ButtonComponent