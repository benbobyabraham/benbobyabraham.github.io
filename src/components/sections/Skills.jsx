import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'Bash', level: 80 },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    skills: [
      { name: 'NumPy/Pandas', level: 95 },
      { name: 'scikit-learn', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'TensorFlow', level: 85 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Apache Spark', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Prometheus', level: 75 },
      { name: 'CI/CD', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      component="section"
      id="skills"
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
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: { xs: 2, sm: 3, md: 4 }
              }}
            >
              Skills
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {skillCategories.map((category, index) => (
                <Grid item xs={12} sm={6} md={4} key={category.category}>
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
                      }}
                    >
                      <Stack spacing={{ xs: 2, sm: 3 }}>
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{
                            fontSize: { xs: '1.1rem', sm: '1.25rem' },
                            textAlign: { xs: 'center', sm: 'left' }
                          }}
                        >
                          {category.category}
                        </Typography>
                        <Stack spacing={{ xs: 1.5, sm: 2 }}>
                          {category.skills.map((skill) => (
                            <Box key={skill.name}>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ mb: { xs: 0.5, sm: 1 } }}
                              >
                                <Typography 
                                  variant="body2"
                                  sx={{
                                    fontSize: { xs: '0.875rem', sm: '1rem' }
                                  }}
                                >
                                  {skill.name}
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  color="text.secondary"
                                  sx={{
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                  }}
                                >
                                  {skill.level}%
                                </Typography>
                              </Stack>
                              <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                sx={{
                                  height: { xs: 4, sm: 6 },
                                  borderRadius: { xs: 2, sm: 3 },
                                  backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                      ? 'rgba(0, 0, 0, 0.1)'
                                      : 'rgba(255, 255, 255, 0.1)',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: { xs: 2, sm: 3 },
                                  },
                                }}
                              />
                            </Box>
                          ))}
                        </Stack>
                      </Stack>
                    </Paper>
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

export default Skills;
