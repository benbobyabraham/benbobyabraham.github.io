import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'NTT DATA',
    role: 'Senior Data Scientist',
    period: '2022 - Present',
    location: 'San Francisco Bay Area',
    highlights: [
      'Lead data scientist for enterprise-scale ML projects serving Fortune 500 clients',
      'Developed and deployed automated ML pipelines processing 10TB+ data daily',
      'Implemented real-time analytics dashboard reducing decision time by 40%',
      'Mentored junior data scientists and led technical knowledge sharing sessions',
    ],
  },
  {
    company: 'Tech I.S.',
    role: 'Data Scientist',
    period: '2020 - 2022',
    location: 'San Francisco',
    highlights: [
      'Built predictive models for customer behavior analysis with 90% accuracy',
      'Designed ETL pipelines for efficient data processing and transformation',
      'Created automated reporting systems saving 20+ hours weekly',
      'Collaborated with cross-functional teams to implement ML solutions',
    ],
  },
  {
    company: 'Thriwe.com',
    role: 'Data Analyst',
    period: '2018 - 2020',
    location: 'India',
    highlights: [
      'Developed statistical models for customer segmentation and targeting',
      'Built interactive dashboards for business performance monitoring',
      'Automated data collection and cleaning processes',
      'Contributed to 25% improvement in marketing ROI through data-driven insights',
    ],
  },
];

const Experience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: 12,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[50]
            : theme.palette.background.default,
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
              Experience
            </Typography>

            <Stack spacing={4}>
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: { xs: 28, md: '50%' },
                        transform: { xs: 'none', md: 'translateX(-50%)' },
                        top: 0,
                        bottom: 0,
                        width: 2,
                        backgroundColor: 'primary.main',
                        opacity: 0.2,
                      },
                    }}
                  >
                    <Grid container spacing={4}>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                          textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                          pr: { xs: 0, md: index % 2 === 0 ? 6 : 0 },
                          pl: { xs: 0, md: index % 2 === 0 ? 0 : 6 },
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              right: { xs: 'auto', md: index % 2 === 0 ? -12 : 'auto' },
                              left: { xs: -12, md: index % 2 === 0 ? 'auto' : -12 },
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            },
                          }}
                        >
                          <Typography variant="h5" gutterBottom>
                            {experience.role}
                          </Typography>
                          <Typography color="primary" variant="h6" gutterBottom>
                            {experience.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {experience.period} | {experience.location}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                          pl: { xs: 4, md: index % 2 === 0 ? 0 : 6 },
                          pr: { xs: 0, md: index % 2 === 0 ? 6 : 0 },
                        }}
                      >
                        <Stack spacing={1}>
                          {experience.highlights.map((highlight, i) => (
                            <Typography
                              key={i}
                              variant="body2"
                              component="li"
                              sx={{
                                listStyleType: 'disc',
                                ml: 2,
                              }}
                            >
                              {highlight}
                            </Typography>
                          ))}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
