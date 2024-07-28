import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/CartSlice';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleActivityGuideClick = () => {
    navigate(`/book/${book.id}`);
  };
  const maintext={
    textAlign: "center",
    color: "#FF5722", // Bright color
    fontSize: 40,
    fontFamily: "'Comic Sans MS', cursive, sans-serif", // Playful font
    fontWeight: 700,
    padding: "20px 20px",
    background: "linear-gradient(90deg, rgba(255,215,0,1) 0%, rgba(255,0,150,1) 100%)", // Gradient background
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    paddingTop: "50px"
}
const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  return (
    <Card 
    sx={{
        maxWidth: 400, // Reduced card width
        m: 2,
        height: '500px', // Ensures all cards are the same height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.05)',
        }
    }}
    >
      <CardMedia
        component="img"
         height="250"
        image={book.img}
        alt={book.title}
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ mt: 0 }}>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Written By: {book.writtenby}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Published by: {book.publishedby}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Suggested grade level: 1st - 2nd
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          ${book.price}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" sx={{borderRadius:3,backgroundColor:"#d6067c",":hover":{backgroundColor:"#ed5192"}}} onClick={handleActivityGuideClick}>
            Activity Guides
          </Button>
          <Button variant="contained" sx={{borderRadius:3,backgroundColor:"#d6067c",":hover":{backgroundColor:"#ed5192"}}} onClick={() => handleAddToCart(book)}>
            Buy This Book
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
