import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Menu, MenuItem, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import navStyles from '../styles/Nav.styles';

const Nav = () => {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <Container>
      <AppBar position="fixed">
        <Container maxWidth={false}>
          <Toolbar sx={navStyles.toolbar}>
            <AutoAwesomeIcon sx={navStyles.icon} />
            <Typography variant="h6" noWrap sx={navStyles.title}>
              COSMO MEMORIES
            </Typography>

            <Box sx={navStyles.growBox}></Box>

            {isSmallScreen ? (
              <>
                <IconButton onClick={handleMenuOpen} disableRipple>
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  {navLinks.map(({ label, path }) => (
                    <MenuItem key={label} component={Link} to={path} onClick={handleMenuClose} disableRipple>
                      {label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={navStyles.buttonBox}>
                {navLinks.map(({ label, path }) => (
                  <Link key={label} to={path}>
                    <Button size="medium" color="inherit">{label}</Button>
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Container>
  );
};

export default Nav;
