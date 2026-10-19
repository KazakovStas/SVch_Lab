import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
          >
            ЛИЦА
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/catalog">
            Каталог
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Добавить кандидата
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;