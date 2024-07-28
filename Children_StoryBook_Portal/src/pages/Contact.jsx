import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import Footer from '../components/Footer';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
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
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Page Heading */}
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' ,marginTop:"70px"}}>
        Contact Us
      </Typography>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{border:"2px solid #d6067c"}}>
              <Grid container spacing={2} >
                <Grid item xs={12} >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056__340.jpg"
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
            <Grid item xs={12} >
            <TextField
              fullWidth
              label="Name"
              id="name"
              name="name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Email"
              id="email"
              name="email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              id="subject"
              name="subject"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              id="message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 ,backgroundColor:"#d6067c"}}
            >
              Send Message
            </Button>
          </Grid>
          </Grid>
            </form>

      {/* Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={maintext}>
          Contact Information
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}> 
          Email: <Link href="mailto:info@example.com">info@example.com</Link>
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Phone: <Link href="tel:+1234567890">+1 (234) 567-890</Link>
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Address: 1234 Example St, City, Country
        </Typography>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={maintext}>
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="https://facebook.com" color="inherit" sx={{ mx: 1 }} target="_blank">
            <Facebook />
          </Link>
          <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }} target="_blank">
            <Twitter />
          </Link>
          <Link href="https://instagram.com" color="inherit" sx={{ mx: 1 }} target="_blank">
            <Instagram />
          </Link>
          <Link href="https://linkedin.com" color="inherit" sx={{ mx: 1 }} target="_blank">
            <LinkedIn />
          </Link>
        </Box>
      </Box>

      {/* Map (Optional) */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={maintext}>
          Find Us
        </Typography>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.258485274514!2d-122.39108708468136!3d37.78010637975803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a90a4cb8f9%3A0x61e8b6998e8718b!2s501%20Howard%20St%2C%20San%20Francisco%2C%20CA%2094141%2C%20USA!5e0!3m2!1sen!2sus!4v1647513043804!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        {/* Embed Google Map here */}
        {/* Example: <iframe src="..." width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe> */}
      </Box>

      {/* Business Hours (Optional) */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={maintext}>
          Business Hours
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>Monday - Friday: 9:00 AM - 5:00 PM</Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>Saturday: 10:00 AM - 4:00 PM</Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>Sunday: Closed</Typography>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Contact;
