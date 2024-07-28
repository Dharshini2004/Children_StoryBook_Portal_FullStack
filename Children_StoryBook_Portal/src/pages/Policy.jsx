import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer';
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
const Policy = () => {
  return (
    <>
    <Container  sx={{ paddingY: 4 }}>
      <Typography variant="h2" gutterBottom align="center" sx={{marginTop:"70px"}}>
        Privacy Policy
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Introduction
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Welcome to [Your Company Name] ("we," "our," "us"). We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL].
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          We may collect the following types of information:
        </Typography>
        <ul style={{listStyle:"none",fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          <li><strong>Personal Information:</strong> Includes names, email addresses, and other information you voluntarily provide to us.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser types, and pages visited.</li>
          <li><strong>Cookies:</strong> We use cookies to improve your experience on our site. You can control cookie settings through your browser.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          We use the collected information to:
        </Typography>
        <ul style={{listStyle:"none",fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          <li>Provide and maintain our services.</li>
          <li>Improve and personalize your experience on our site.</li>
          <li>Send you updates, promotional materials, and other information related to our services.</li>
          <li>Respond to your inquiries and provide customer support.</li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child under 13 has provided us with personal information, please contact us, and we will take steps to delete such information.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={maintext}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          If you have any questions about this Privacy Policy, please contact us at:
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "Raleway",fontSize:20,fontWeight:6}}>
          Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
        </Typography>
        <Typography variant="body1">
          Address: 123 Storybook Lane, Imagination City, IC 45678
        </Typography>
      </Box>
    </Container>
      <Footer/>
      </>
  );
};

export default Policy;
