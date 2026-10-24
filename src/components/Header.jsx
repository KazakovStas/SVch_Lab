import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, 
  TextField, InputAdornment, IconButton, Menu, MenuItem 
} from '@mui/material';
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          {t('app_name')}
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/catalog">
            {t('nav_catalog')}
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            {t('nav_projects')}
          </Button>
          <Button color="inherit" component={Link} to="/add">
            {t('nav_add')}
          </Button>
          
          {/* Переключатель языков */}
          <Box sx={{ display: 'flex', gap: 1, ml: 2, borderLeft: '1px solid rgba(255,255,255,0.3)', pl: 2 }}>
            <Button 
              size="small" 
              sx={{ 
                color: i18n.language === 'ru' ? '#fff' : 'rgba(255,255,255,0.7)', 
                fontWeight: i18n.language === 'ru' ? 'bold' : 'normal',
                minWidth: 'auto',
                px: 1
              }}
              onClick={() => changeLanguage('ru')}
            >
              {t('lang_ru')}
            </Button>
            <Button 
              size="small" 
              sx={{ 
                color: i18n.language === 'en' ? '#fff' : 'rgba(255,255,255,0.7)', 
                fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
                minWidth: 'auto',
                px: 1
              }}
              onClick={() => changeLanguage('en')}
            >
              {t('lang_en')}
            </Button>
          </Box>
        </Box>

        <TextField
          size="small"
          placeholder={t('search_placeholder')}
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
            <MenuItem onClick={handleClose}>{t('menu_login')}</MenuItem>
            <MenuItem onClick={handleClose}>{t('menu_profile')}</MenuItem>
            <MenuItem onClick={handleClose}>{t('menu_logout')}</MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;