import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="linear-gradient(to right, #f569a3, #f79ed1)"
      color="Green"
      textAlign="center"
      padding={3}
    >
      <CheckCircleOutlineIcon style={{ fontSize: 100, color: 'Black' }} />
      <Typography variant="h3" component="h1" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Thank you for your purchase.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Your order has been confirmed and is being processed.
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: '#d6067c',
          ':hover': { backgroundColor: '#ed5192' },
        }}
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
