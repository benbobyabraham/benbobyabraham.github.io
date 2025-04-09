import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'Big Data Ticketing System',
    description:
      'Developed a scalable ticketing system processing millions of records daily. Implemented real-time analytics and automated ticket routing using ML.',
    technologies: ['Python', 'Apache Spark', 'AWS', 'scikit-learn'],
    contribution: 'Led end-to-end development and deployment',
    github: 'https://github.com/benbobyabraham/ticketing-system',
    demo: 'https://demo-ticketing.example.com',
  },
  {
    title: 'Santander Banking Metrics',
    description:
      'Built predictive models for customer transaction behavior analysis. Improved fraud detection accuracy by 25%.',
    technologies: ['Python', 'XGBoost', 'Pandas', 'Docker'],
    contribution: 'Data modeling and feature engineering',
    github: 'https://github.com/benbobyabraham/banking-metrics',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Developed an ML model to predict customer churn with 92% accuracy. Integrated with existing CRM for automated alerts.',
    technologies: ['Python', 'TensorFlow', 'SQL', 'Flask'],
    contribution: 'ML model development and API integration',
    github: 'https://github.com/benbobyabraham/churn-prediction',
    demo: 'https://churn-demo.example.com',
  },
  {
    title: 'Image Classification System',
    description:
      'Built a deep learning system for automated image classification. Achieved 95% accuracy on product categorization.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    contribution: 'Architecture design and model training',
    github: 'https://github.com/benbobyabraham/image-classification',
  },
  {
    title: 'A/B Testing Framework',
    description:
      'Created a statistical framework for A/B testing. Improved decision-making process for feature launches.',
    technologies: ['Python', 'R', 'Statistics', 'Streamlit'],
    contribution: 'Statistical analysis and dashboard development',
    github: 'https://github.com/benbobyabraham/ab-testing',
    demo: 'https://ab-testing-demo.example.com',
  },
  {
    title: 'ETL Pipeline Automation',
    description:
      'Designed and implemented automated ETL pipelines processing terabytes of data daily. Reduced processing time by 60%.',
    technologies: ['Python', 'Airflow', 'Snowflake', 'dbt'],
    contribution: 'Pipeline architecture and implementation',
    github: 'https://github.com/benbobyabraham/etl-automation',
  },
];

const Portfolio = () => {
  return (
    <Box
      component="section"
      id="portfolio"
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
            <Typography 
              variant="h2" 
              component="h2" 
              textAlign="center" 
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: { xs: 2, sm: 3, md: 4 }
              }}
            >
              Portfolio
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                        <Stack spacing={{ xs: 1.5, sm: 2 }}>
                          <Typography 
                            variant="h5" 
                            component="h3"
                            sx={{
                              fontSize: { xs: '1.25rem', sm: '1.5rem' }
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="primary"
                            sx={{
                              mb: { xs: 1, sm: 2 },
                              fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}
                          >
                            <strong>Role:</strong> {project.contribution}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: { xs: 0.5, sm: 1 }
                            }}
                          >
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                  m: 0.5,
                                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                }}
                              />
                            ))}
                          </Box>
                        </Stack>
                      </CardContent>
                      <CardActions sx={{ p: { xs: 2, sm: 3 }, pt: 0 }}>
                        <Button
                          size="small"
                          startIcon={<GitHub />}
                          href={project.github}
                          target="_blank"
                          sx={{
                            fontSize: { xs: '0.75rem', sm: '0.875rem' }
                          }}
                        >
                          Code
                        </Button>
                        {project.demo && (
                          <Button
                            size="small"
                            startIcon={<Launch />}
                            href={project.demo}
                            target="_blank"
                            sx={{
                              fontSize: { xs: '0.75rem', sm: '0.875rem' }
                            }}
                          >
                            Demo
                          </Button>
                        )}
                      </CardActions>
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

export default Portfolio;
