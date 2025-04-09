import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
