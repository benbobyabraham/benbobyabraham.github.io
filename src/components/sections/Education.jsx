import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

const education = [
  {
    school: 'Golden Gate University',
    degree: 'MS Business Analytics',
    period: '2020 - 2022',
    location: 'San Francisco, CA',
    details: [
      'Focus on advanced analytics and machine learning',
      'Research in predictive modeling and time series analysis',
      'GPA: 3.9/4.0',
    ],
  },
  {
    school: 'Hindustan University',
    degree: 'BTech Mechatronics & Robotics',
    period: '2014 - 2018',
    location: 'Chennai, India',
    details: [
      'First Class with Distinction',
      'Specialization in automation and control systems',
      'Final year project: Automated Vision-based Quality Control System',
    ],
  },
  {
    school: 'IIT Bombay',
    degree: 'Advanced Data Science Certificate',
    period: '2019',
    location: 'Mumbai, India',
    details: [
      'Intensive program in statistical learning and big data',
      'Completed capstone project in anomaly detection',
      'Top 5% of the cohort',
    ],
  },
];

const Education = () => {
  return (
    <Box
      component="section"
      id="education"
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
              Education
            </Typography>

            <Grid container spacing={4}>
              {education.map((edu, index) => (
                <Grid item xs={12} md={4} key={edu.school}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <CardContent>
                        <Stack spacing={3}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <School color="primary" />
                            <Typography variant="h6" component="h3">
                              {edu.school}
                            </Typography>
                          </Box>

                          <Stack spacing={1}>
                            <Typography
                              variant="subtitle1"
                              color="primary"
                              fontWeight="medium"
                            >
                              {edu.degree}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {edu.period}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              gutterBottom
                            >
                              {edu.location}
                            </Typography>
                          </Stack>

                          <Stack spacing={1}>
                            {edu.details.map((detail, i) => (
                              <Typography
                                key={i}
                                variant="body2"
                                component="li"
                                sx={{ listStyleType: 'disc', ml: 2 }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
