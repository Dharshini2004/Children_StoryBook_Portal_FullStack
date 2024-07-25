import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  return (
    <Box>
        <Navbar/>
        {true?<Outlet/> : <Navigate to="/login"/>}
    </Box>
  )
}

export default PrivateRoute