import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, 
  TextField, InputAdornment, IconButton, Menu, MenuItem 
} from '@mui/material';
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
        >
          ЛИЦА
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button color="inherit" component={Link} to="/catalog">Каталог</Button>
          <Button color="inherit" component={Link} to="/projects">Биржа проектов</Button>
          <Button color="inherit" component={Link} to="/add">Попасть в базу</Button>
        </Box>

       <TextField
  size="small"
  placeholder="Поиск по навыкам..."
  sx={{ 
    bgcolor: 'rgba(255,255,255,0.15)', 
    borderRadius: 1,
    '& .MuiInputBase-root': { color: 'white' },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }
  }}
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: 'white' }} />
        </InputAdornment>
      ),
    }
  }}
/>

        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Войти</MenuItem>
            <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
            <MenuItem onClick={handleClose}>Выйти</MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;