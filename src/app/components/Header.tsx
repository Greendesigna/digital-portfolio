import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDrawerOpen(false);
    }
  };

  const menuItems = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
              Portfolio
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {menuItems.slice(0, 3).map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => scrollToSection('contact')}
                sx={{ borderRadius: 8 }}
              >
                Contact
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
}
