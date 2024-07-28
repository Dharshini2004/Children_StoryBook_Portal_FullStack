// src/components/BookDetailPage.jsx
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import PictureItem from '../pages/categories/PictureBook/PictureItem';

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
    // paddingTop: "50px"
}

const subtext={
    fontFamily: "Raleway",
    fontSize:20,
    fontWeight:6
}
const BookDetails = () => {
  const { id } = useParams();
  const book = PictureItem.find(book => book.id === id);
  const navigate=useNavigate();

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 600, mb: 3,mt:10 }}>
                <Link  to={book.videolink}>
            <img src={book.img} alt="Picture Books"
          style={{ width: '100%',
            height: '500px',
            objectFit: 'cover', 
            }}
            // onClick={() => {
            //     navigate("https://youtu.be/vlXgBwyw3Kc?si=FIMuL6WRPPAenFzQ");
            //   }}
              >
              </img>
                </Link>
              {/* <iframe
                width="100%"
                height="340"
                src={book.img}
                title={book.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}

            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h4" component="div" sx={{ mb: 2, textAlign: 'center' }} style={maintext}>
                {book.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div" style={subtext}>
                Written by: {book.writtenby}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div" style={subtext}>
                Illustrated by: {book.illustratedby}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div" style={subtext}>
                Published by: {book.publishedby}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div" style={subtext}>
                Suggested grade level: {book.grade}
              </Typography>
              <Typography variant="h6" color="text.primary" component="div" sx={{ mt: 2 }} style={subtext}>
                ${book.price}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="div" sx={{ mt: 4, mb: 2 }} style={maintext}>
            About this book:
          </Typography>
          <Typography variant="body1" component="div" style={subtext}>
            {book.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetails;
