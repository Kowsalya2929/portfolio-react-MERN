import { DarkMode, Home, LightMode, Menu, PersonSearch, Phone, Psychology, School, Timeline } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ theme, setTheme }) => {
  const menuItems = [
    { name: "Home", path: '/', icon: <Home /> },
    { name: "About", path: '/about', icon: <PersonSearch /> },
    { name: "Education", path: '/education', icon: <School /> },
    { name: "Skills", path: '/skills', icon: <Psychology /> },
    { name: "Projects", path: '/projects', icon: <Timeline /> },
    { name: "Contact", path: '/contact', icon: <Phone /> },
  ];

  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <Box>
      <AppBar position="sticky" sx={{ p: { md: 1, xs: 1 }, backgroundColor: 'pink' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          {/* Mobile Menu Button */}
          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            <IconButton sx={{ color: 'black' }} onClick={toggleMenu}>
              <Menu />
            </IconButton>
          </Box>

          {/* Logo */}
          <Typography variant="h4" component={Link} to={'/'} 
          sx={{ 
            fontSize: { xs: 25, md: 30 },
            textDecoration:'none', 
            color: 'black', 
            fontFamily: 'cursive',
            animation: 'p1 1s ease-in-out',
            "@keyframes p1":{
              "0%":{
                transform: 'translateY(-100%)'
              },
              "50%":{
                transform: 'translateX(0)'
              }
            },
            "@media (min-width: 900px)":{
              animation: 'p2 1s ease-in-out',
              "@keyframes p2":{
                "0%":{
                  transform: 'translateX(-100%)',
                },
                "100%":{
                  transform: 'translateY(0)'
                }
              }
            },
            fontWeight:'bold'
            }}>
            Portfolio.
          </Typography>

          {/* Desktop Navigation */}
          <List sx={{ display: { md: 'flex', xs: 'none' }, alignItems: 'center', justifyContent: 'space-evenly', gap: 6 }}>
            {menuItems.map((m, i) => (
              <ListItem key={i} sx={{ gap: 1, padding: 0 }}>
                <Box
                  component={Link}
                  to={m.path}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: location.pathname === m.path ? '#ed4b82' : 'black',
                    fontSize: '18px',
                    position: 'relative',
                    transition: 'color 0.3s ease-in-out',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                    "&:hover": {
                      color: '#ed4b82',
                      "&::after": {
                        width: '100%',
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#ed4b82',
                      transition: 'width 0.4s ease-in-out',
                    },
                    animation: 'p3 1s ease-in-out',
                    "@keyframes p3":{
                      "0%":{
                        transform: 'translateY(-100%)'
                      },
                      "100%":{
                        transform: 'translateX(0%)'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 30 }}>{m.icon}</ListItemIcon>
                  <Typography variant="body1" sx={{fontFamily:'cursive',fontSize:'18px'}}>{m.name}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Theme Toggle Button */}
          <Box 
          sx={{ 
            fontSize: 20, 
            backgroundColor: 'rgba(255,255,255,0.7)', 
            borderRadius: '50%',
            animation: 'bounce 1.5s infinite',
            "@keyframes bounce":{
              "40%":{
                transform:'translateY(-10px)'
              }
            }
          }}>
            <IconButton sx={{ color: theme === 'light' ? 'orange' : 'black' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMenu}>
        <List sx={{ width: '200px', mt: 2}}>
          {menuItems.map((m, i) => (
            <ListItem key={i} component={Link} to={m.path} onClick={toggleMenu}>
              <ListItemIcon sx={{ color: location.pathname === m.path ? '#ed4b82' : theme === 'light' ? 'black' : 'white' }}>
                {m.icon}
              </ListItemIcon>
              <Typography
                variant="body1"
                sx={{
                  color: location.pathname === m.path ? '#ed4b82' : theme === 'light' ? 'black' : 'white',
                  fontFamily: 'cursive',
                  fontSize: '18px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {m.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
