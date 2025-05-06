import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { darkTheme } from './styles/theme';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import SEO from './components/SEO';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <CssBaseline />
      <SEO />
      <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Education />
        <Blog />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
