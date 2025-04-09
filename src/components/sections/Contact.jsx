import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Paper,
  Alert,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LinkedIn,
  GitHub,
  Send,
} from '@mui/icons-material';
import emailjs from 'emailjs-com';

const contactInfo = [
  {
    icon: <Email />,
    label: 'Email',
    value: 'benbobyabraham@gmail.com',
    link: 'mailto:benbobyabraham@gmail.com',
  },
  {
    icon: <Phone />,
    label: 'Phone',
    value: '+1 (510) 461-6737',
    link: 'tel:+15104616737',
  },
  {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    value: 'ben-boby-3ba0a8144',
    link: 'https://linkedin.com/in/ben-boby-3ba0a8144',
  },
  {
    icon: <GitHub />,
    label: 'GitHub',
    value: 'benbobyabraham',
    link: 'https://github.com/benbobyabraham',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false });

    emailjs
      .send(
        'service_la6npah',
        'template_xyz123',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'your-user-id'
      )
      .then(
        (response) => {
          setFormData({ name: '', email: '', message: '' });
          setStatus({
            submitting: false,
            error: null,
            success: true,
          });
        },
        (error) => {
          setStatus({
            submitting: false,
            error: 'An error occurred. Please try again later.',
            success: false,
          });
        }
      );
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={6}>
            <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
              Contact
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Stack spacing={4}>
                    <Typography variant="h4" gutterBottom>
                      Get in Touch
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      I'm always interested in hearing about new opportunities,
                      collaborations, or just having a chat about data science and
                      technology.
                    </Typography>
                    <Stack spacing={3}>
                      {contactInfo.map((info) => (
                        <Paper
                          key={info.label}
                          elevation={0}
                          sx={{
                            p: 2,
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <IconButton
                              color="primary"
                              component="a"
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.icon}
                            </IconButton>
                            <Stack>
                              <Typography variant="subtitle2" color="text.secondary">
                                {info.label}
                              </Typography>
                              <Typography variant="body2">
                                {info.value}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={3}>
                        <Typography variant="h4" gutterBottom>
                          Send a Message
                        </Typography>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        {status.error && (
                          <Alert severity="error">{status.error}</Alert>
                        )}
                        {status.success && (
                          <Alert severity="success">
                            Message sent successfully!
                          </Alert>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          disabled={status.submitting}
                        >
                          {status.submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Stack>
                    </form>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
