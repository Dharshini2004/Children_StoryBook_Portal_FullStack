import React from 'react';
import { Box } from '@mui/material';
import Navbar from "../components/Navbar/Navbar";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Box>
      <Navbar />
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </Box>
  );
}

export default PrivateRoute;
