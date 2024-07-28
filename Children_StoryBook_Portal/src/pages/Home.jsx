import React from 'react'
import homegif from "../assets/homegif.gif";
import { Box, Grid, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousalcomp from '../components/Carouselcomp';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

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
function Home() {
  const navigate=useNavigate();
  return (
    <>
    <div
    >
    <Typography variant='h3' 
    marginTop="80px"
        sx={maintext}>
    Explore our curated collection of new and popular books to find your
    next literary adventure.
    </Typography>
    </div>
    <img src={homegif} alt="gifimage" ></img>
    <Typography
      variant="h3"
      sx={
       maintext
      }
    >
      Explore the Categories!
    </Typography>
    <Box
     sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}
      sx={{ justifyContent: 'center',
         margin: "0 auto",
         width:"100%"
       }}
      >
        <Grid item xs={6} sm={3}>
          <img src="https://www.shutterstock.com/image-vector/reading-interesting-book-concept-immersion-600nw-2296479725.jpg" alt="Picture Books"
          style={{ width: '100%',
            height: '200px',
            objectFit: 'cover', 
            }}
            onClick={() => {
                navigate("/picturebook");
              }}></img>
            <h4>Picture Books</h4>
        </Grid>
        <Grid item xs={6} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3kd3ByCIqIv7C4MOWP2Ub1YsgzW9PqBJZA&s" alt="Early Reding Books"
            style={{ width: '100%',
                height: '200px',
                objectFit: 'cover', }}></img>
                <h4>Early Reding Books</h4>
        </Grid>
        <Grid item xs={6} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2CkJ2FAkid7DkaBacD0Kb95xwkRDFM--yQ&s" alt="Fantasy and Adventure Books"
            style={{ width: '100%',
                height: '200px',
                objectFit: 'cover', }}></img>
                <h4>Fantasy and Adventure Books</h4>
        </Grid>
        <Grid item xs={6} sm={3}>
            <img src="https://study.com/cimages/videopreview/g4u0r4qss5.jpg" alt="Graphic Novels and Comics"
            style={{ width: '100%',
                height: '200px',
                objectFit: 'cover', }}></img>
                <h4>Graphic Novels and Comics</h4>
        </Grid>
      </Grid>
    </Box>
    <Typography
      variant="h3"
      sx={
       maintext
      }
    >
      Book Showcase!
    </Typography>
    <Box >
      <Carousalcomp/>
    </Box>

    <Footer/>
    </>
  )
}

export default Home