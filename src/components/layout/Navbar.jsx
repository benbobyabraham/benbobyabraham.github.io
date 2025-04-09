import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as ScrollLink } from 'react-scroll';

const pages = ['About', 'Portfolio', 'Skills', 'Experience', 'Education', 'Blog', 'Contact'];

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      color="inherit" 
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(20px)', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={ScrollLink}
            to="home"
            smooth={true}
            duration={500}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Ben Boby
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={page.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component={ScrollLink}
            to="home"
            smooth={true}
            duration={500}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Ben Boby
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <ScrollLink
                key={page}
                to={page.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-64}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 1, color: 'inherit', display: 'block' }}
                >
                  {page}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
