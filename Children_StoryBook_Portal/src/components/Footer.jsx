import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, Twitter } from '@mui/icons-material';
import { PlayArrow,Apple} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d6067c',
        color: 'white',
        position: 'relative',
        width: '100%',
        marginTop:"100px",
        bottom: 0,
        right:0,
        left:0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Social Media Icons */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" sx={{ color: '#FFF', mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://facebook.com" color="inherit" sx={{ mx: 1 }}>
              <Facebook />
            </Link>
            <Link href="https://instagram.com" color="inherit" sx={{ mx: 1 }}>
              <Instagram />
            </Link>
            <Link href="https://youtube.com" color="inherit" sx={{ mx: 1 }}>
              <YouTube />
            </Link>
            <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
              <Twitter />
            </Link>
          </Box>
        </Grid>

        {/* Download Icons */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" sx={{ color: '#FFF', mb: 2 }}>
            Download Our App
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="https://play.google.com" color="inherit" sx={{ mb: 1 }}>
              <PlayArrow />
              <Typography variant="body2">Google Play</Typography>
            </Link> 
            <Link href="https://apps.apple.com" color="inherit" sx={{ mb: 1 }}>
              <Apple />
              <Typography variant="body2">App Store</Typography>
            </Link> 
            {/* <Link href="https://chrome.google.com" color="inherit">
              <Chrome />
              <Typography variant="body2">Chrome Web Store</Typography>
            </Link> */}
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" sx={{ color: '#FFF', mb: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1,textDecoration:"none" }}>
              About
            </Link>
            <Link href="/policy" color="inherit" sx={{ display: 'block', mb: 1,textDecoration:"none" }}>
              Privacy Policy
            </Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block' ,textDecoration:"none"}}>
              Contact Us
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          borderTop: '1px solid #444',
          pt: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: '#FFF' }}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
