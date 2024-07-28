// src/components/PictureBooks.jsx
import React from 'react';
import BookCard from '../../../components/BookCard';
import PictureItem from "./PictureItem";
import { Container, Grid, Typography } from '@mui/material';
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
function PictureBooks() {
    const books = PictureItem;
    
    return (
        <Container>
            <Typography variant="h3" sx={{ textAlign: 'center', my: 4 }} style={maintext}>
                Explore Our Collection of Picture Books!
            </Typography>
            <Grid container spacing={4}>
                {books.map(book => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <BookCard book={book} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PictureBooks;
