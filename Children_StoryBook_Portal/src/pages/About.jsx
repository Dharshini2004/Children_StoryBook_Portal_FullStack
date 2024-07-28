import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Footer from '../components/Footer';
// import "../assets/styles/About.css"

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
const About = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h2" gutterBottom align="center" sx={{marginTop:"50px"}}>
        About Us
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
           Our vision is to ignite a lifelong love of reading in children through captivating stories and imaginative worlds. We aim to provide a diverse collection of children’s books that inspire creativity, foster empathy, and build literacy skills from an early age.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext} >
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Our mission is to curate a selection of high-quality children's literature that supports early learning and development. We strive to create an engaging, educational, and enjoyable reading experience for children and their families. Through partnerships with authors, illustrators, and educators, we ensure that our books meet the highest standards of excellence and relevance.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Future Goals
        </Typography>
        <ul style={{listStyle:"none",fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          <li>Expanding our book collection to include even more diverse and inclusive titles.</li>
          <li>Launching interactive digital content to complement our physical books and enhance the reading experience.</li>
          <li>Developing educational resources for parents and teachers to support children's reading and literacy development.</li>
          <li>Partnering with schools and libraries to promote reading initiatives and provide access to our collection.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Our portal is dedicated to offering books that are carefully selected for quality, diversity, and educational value. We understand the importance of early literacy and are committed to providing a platform where children can discover new worlds and ideas. With a focus on user-friendly navigation and customer support, we ensure that finding the perfect book for your child is both easy and enjoyable.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          We’d love to hear from you! If you have any questions or feedback, please reach out to us:
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Phone: (123) 456-7890
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Address: 123 Storybook Lane, Imagination City, IC 45678
        </Typography>
      </Box>
      <Footer/>
    </Container>
  );
};

export default About;
