import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Launch } from '@mui/icons-material';

const blogPosts = [
  {
    title: 'How I Built a Churn Prediction System',
    preview:
      'A deep dive into building and deploying a machine learning system for predicting customer churn using Python and scikit-learn.',
    image: '/blog/churn-prediction.jpg',
    date: 'Coming Soon',
    readTime: '10 min read',
    link: '#',
  },
  {
    title: 'Favorite Python Tips for Data Scientists',
    preview:
      'Essential Python tricks and best practices that every data scientist should know to write more efficient and maintainable code.',
    image: '/blog/python-tips.jpg',
    date: 'Coming Soon',
    readTime: '8 min read',
    link: '#',
  },
  {
    title: 'Visualizing Big Data for Business Impact',
    preview:
      'Techniques and tools for creating effective data visualizations that drive business decisions and tell compelling stories.',
    image: '/blog/data-viz.jpg',
    date: 'Coming Soon',
    readTime: '12 min read',
    link: '#',
  },
];

const Blog = () => {
  return (
    <Box
      component="section"
      id="blog"
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
              Blog
            </Typography>

            <Grid container spacing={4}>
              {blogPosts.map((post, index) => (
                <Grid item xs={12} md={4} key={post.title}>
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
                      <CardMedia
                        component="div"
                        sx={{
                          pt: '56.25%', // 16:9 aspect ratio
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                              ? theme.palette.grey[200]
                              : theme.palette.grey[800],
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Stack spacing={2}>
                          <Typography variant="h6" component="h3">
                            {post.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {post.preview}
                          </Typography>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {post.date} · {post.readTime}
                            </Typography>
                            <Button
                              size="small"
                              endIcon={<Launch />}
                              href={post.link}
                              disabled
                            >
                              Read More
                            </Button>
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

export default Blog;
