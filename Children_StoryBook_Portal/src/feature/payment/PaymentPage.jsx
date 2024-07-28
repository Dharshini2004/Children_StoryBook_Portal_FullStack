import React, { useState, useRef } from 'react';
import { Box, TextField, InputAdornment, Button, Avatar, Typography, Alert } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import LockIcon from '@mui/icons-material/Lock';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useNavigate } from 'react-router-dom';

const linearGradient = 'linear-gradient(to right, #f569a3, #f79ed1)';

const PaymentPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const cardNumberRef = useRef(null);
  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRef.current.value) {
      newErrors.name = 'Name is required';
    }
    if (!emailRef.current.value || !emailRegex.test(emailRef.current.value)) {
      newErrors.email = 'Valid email is required';
    }
    if (!cardNumberRef.current.value || !/^\d{12}$/.test(cardNumberRef.current.value)) {
      newErrors.cardNumber = 'Card number must be 12 digits';
    }
    if (!expiryDateRef.current.value) {
      newErrors.expiryDate = 'Expiry date is required';
    }
    if (!cvvRef.current.value || !/^\d{3}$/.test(cvvRef.current.value)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Handle payment submission logic here
      console.log('Payment submitted', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        cardNumber: cardNumberRef.current.value,
        expiryDate: expiryDateRef.current.value,
        cvv: cvvRef.current.value,
      });
    //   setShowAlert(true);
      navigate('/success');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={600}
      minWidth={400}
      margin="auto"
      marginTop={5}
      padding={3}
      borderRadius={5}
      boxShadow="5px 5px 10px #ccc"
      sx={{
        backgroundImage: linearGradient,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <Typography variant="h4" padding={3} textAlign="center">
        Payment Information
      </Typography>
      {showAlert && <Alert severity="success">Payment successful</Alert>}
      <form onSubmit={handleSubmit} noValidate>
        <Box mb={2}>
          <TextField
            label="Name"
            inputRef={nameRef}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            inputRef={emailRef}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Card Number"
            inputRef={cardNumberRef}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Expiry Date"
            inputRef={expiryDateRef}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.expiryDate}
            helperText={errors.expiryDate}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EventIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="CVV"
            inputRef={cvvRef}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.cvv}
            helperText={errors.cvv}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Button
          sx={{
            marginTop: 3,
            borderRadius: 3,
            backgroundColor: "#d6067c",
            ":hover": { backgroundColor: "#ed5192" },
          }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default PaymentPage;
