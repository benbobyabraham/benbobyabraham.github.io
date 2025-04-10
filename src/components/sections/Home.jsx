import React from 'react';
import { Box, Container, Typography, Stack, Button, Avatar } from '@mui/material';
import { ArrowForward, Download } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import headshot from '../../artifacts/ben_boby_headshot.jpg';

const Home = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[50]
            : theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={4} sx={{ maxWidth: '100%', mx: 'auto', alignItems: 'center' }}>
            <Avatar
              src={headshot}
              alt="Ben Boby"
              sx={{
                width: { xs: 200, sm: 250, md: 300 },
                height: { xs: 200, sm: 250, md: 300 },
                mb: 2,
                border: (theme) => `4px solid ${theme.palette.primary.main}`,
                boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}30`,
              }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                lineHeight: 1.1,
                textAlign: 'center',
                mb: 2,
              }}
            >
              Ben Boby
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                textAlign: 'center',
                background: 'linear-gradient(45deg, #1a73e8 30%, #34a853 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Turning data into impact
            </Typography>

            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                textAlign: 'center',
              }}
            >
              Helping businesses make better decisions through intelligent systems
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                textAlign: 'center',
              }}
            >
              Senior Data Scientist passionate about analytics, automation, and visual storytelling
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <ScrollLink to="portfolio" smooth={true} duration={500} offset={-64}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ minWidth: { xs: 200, sm: 220 } }}
                >
                  View My Work
                </Button>
              </ScrollLink>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                href="/artifacts/ben_boby_resume.pdf"
                target="_blank"
                sx={{ minWidth: { xs: 200, sm: 220 } }}
              >
                Download Resume
              </Button>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
