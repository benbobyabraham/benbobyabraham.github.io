import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Analytics, Cloud } from '@mui/icons-material';

const toolCategories = [
  {
    title: 'Programming',
    icon: <Code />,
    tools: ['Python', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    title: 'Big Data',
    icon: <Storage />,
    tools: ['Spark', 'Hadoop', 'Kafka', 'Airflow'],
  },
  {
    title: 'Analytics',
    icon: <Analytics />,
    tools: ['Tableau', 'Power BI', 'Pandas', 'scikit-learn'],
  },
  {
    title: 'Cloud',
    icon: <Cloud />,
    tools: ['AWS', 'Docker', 'Kubernetes', 'Prometheus'],
  },
];

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        background: (theme) =>
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
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: { xs: 2, sm: 3, md: 4 }
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                maxWidth: 800,
                mx: 'auto',
                textAlign: 'center',
                px: { xs: 2, sm: 3, md: 0 }
              }}
            >
              With a background in Mechatronics Engineering and a Master's in Business Analytics,
              I bring a unique blend of technical expertise and business acumen to data science.
              Currently working as a Senior Data Scientist at NTT Data, I specialize in building
              scalable ML systems and creating impactful data visualizations that drive business decisions.
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {toolCategories.map((category, index) => (
                <Grid item xs={12} sm={6} md={3} key={category.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid',
                        borderColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.5)'
                            : 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Stack spacing={{ xs: 1.5, sm: 2 }} alignItems="center">
                        <Box
                          sx={{
                            p: { xs: 1, sm: 1.5 },
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{
                            fontSize: { xs: '1.1rem', sm: '1.25rem' },
                            textAlign: 'center'
                          }}
                        >
                          {category.title}
                        </Typography>
                        <Box>
                          {category.tools.map((tool) => (
                            <Typography
                              key={tool}
                              variant="body2"
                              color="text.secondary"
                              textAlign="center"
                              sx={{ 
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                mb: 0.5
                              }}
                            >
                              {tool}
                            </Typography>
                          ))}
                        </Box>
                      </Stack>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ 
                textAlign: 'center', 
                fontStyle: 'italic',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Fun fact: When I'm not diving into data, you'll find me exploring new hiking trails
              and experimenting with computer vision projects!
            </Typography>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
