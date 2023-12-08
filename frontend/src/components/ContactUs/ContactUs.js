import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const ContactUs = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You would handle the form submission here
    // For example, sending the form data to your backend server
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Contact Us
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
            <div>
              <Typography variant="h6" gutterBottom>Contact Details</Typography>
              <Typography>Email: beyondfinds2023@gmail.com</Typography>
              <Typography>Phone: +1 (123) 456-7890</Typography>
              <Typography>Address: 123 Main Street, Waterloo, ON</Typography>
            </div>

            <div>
              <Typography variant="h6" gutterBottom>Office Hours</Typography>
              <Typography>Monday to Friday: 9:00 AM - 6:00 PM</Typography>
              <Typography>Saturday: 10:00 AM - 4:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                margin="normal"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Your Email"
                margin="normal"
                name="email"
                autoComplete="email"
              />
              <TextField
                fullWidth
                id="subject"
                label="Subject"
                margin="normal"
                name="subject"
              />
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                margin="normal"
                name="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Visit Our Office
        </Typography>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.688284146384!2d-80.52494528452097!3d43.464257679127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4bca3a9b599%3A0x7e4e760f1b7773b2!2sWaterloo%2C%20ON!5e0!3m2!1sen!2sca!4v1662617741376!5m2!1sen!2sca"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </Box>
    </Container>
  );
};

export default ContactUs;
