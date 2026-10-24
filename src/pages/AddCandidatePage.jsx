import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { 
  Container, Paper, Typography, TextField, Button, Box,
  FormControl, InputLabel, Select, MenuItem,
  FormGroup, FormControlLabel, Checkbox,
  Snackbar, Alert,
  Breadcrumbs, Link as MuiLink
} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate, clearError } from '../redux/candidatesSlice';

const AddCandidatePage = () => {
  const dispatch = useDispatch();
const error = useSelector((state) => state.candidates.error); // Читаем ошибку из Redux
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '', position: '', experience: '', salary: '', category: '',
    location: '', age: '', telegram: '', portfolio: '', general_info: '', reason: '', tags: []
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      tags: checked ? [...prev.tags, value] : prev.tags.filter(tag => tag !== value)
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  const newCandidate = {
    ...formData,
    salary: Number(formData.salary) || 0,
    avatar: 'img/default-avatar.png'
  };
  
  // Отправляем данные в Redux. Redux сам проверит их через функцию prepare
  const action = dispatch(addCandidate(newCandidate));
  
  // Проверяем результат (если prepare вернул payload:null, значит ошибка валидации)
  if (action.payload) {
    setSnackbar({ open: true, message: 'Кандидат успешно добавлен в базу!', severity: 'success' });
    setTimeout(() => navigate('/catalog'), 2000); 
  } else {
    // Если ошибка, показываем её в Snackbar
    setSnackbar({ open: true, message: action.error || 'Ошибка при добавлении', severity: 'error' });
    dispatch(clearError()); // Сбрасываем ошибку в Redux
  }
};

  const handleCloseSnackbar = () => setSnackbar(prev => ({ ...prev, open: false }));

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      
      <Breadcrumbs 
        separator="/" 
        aria-label="breadcrumb" 
        sx={{ mb: 3, fontSize: 14 }}
      >
        <MuiLink
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <HomeIcon fontSize="small" />
          Главная
        </MuiLink>
        <MuiLink
          component={RouterLink}
          to="/catalog"
          underline="hover"
          color="inherit"
        >
          Каталог
        </MuiLink>
        <Typography color="text.primary">Добавить кандидата</Typography>
      </Breadcrumbs>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Добавить нового кандидата
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Заполните информацию о кандидате. Поля со звёздочкой (*) обязательны.
        </Typography>

{error && (
  <Alert severity="error" sx={{ mb: 2 }}>
    {error}
  </Alert>
)}

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <TextField label="ФИО *" name="name" value={formData.name} onChange={handleChange} required fullWidth />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Должность *" name="position" value={formData.position} onChange={handleChange} required fullWidth />
              <TextField label="Опыт работы *" name="experience" value={formData.experience} onChange={handleChange} required fullWidth />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Зарплатные ожидания, ₽ *" name="salary" type="number" value={formData.salary} onChange={handleChange} required fullWidth />
              <TextField label="Возраст" name="age" value={formData.age} onChange={handleChange} fullWidth />
            </Box>

            <FormControl fullWidth required>
              <InputLabel id="category-label">Категория *</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category}
                label="Категория *"
                onChange={handleChange}
              >
                <MenuItem value="marketing">Маркетинг</MenuItem>
                <MenuItem value="development">Разработка</MenuItem>
                <MenuItem value="design">Дизайн</MenuItem>
                <MenuItem value="sales">Продажи</MenuItem>
                <MenuItem value="analytics">Аналитика</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="subtitle2" sx={{ mt: 1 }}>Формат работы:</Typography>
            <FormGroup row>
              <FormControlLabel control={<Checkbox name="tags" value="fulltime" checked={formData.tags.includes('fulltime')} onChange={handleTagChange} />} label="Полная занятость" />
              <FormControlLabel control={<Checkbox name="tags" value="parttime" checked={formData.tags.includes('parttime')} onChange={handleTagChange} />} label="Частичная занятость" />
              <FormControlLabel control={<Checkbox name="tags" value="remote" checked={formData.tags.includes('remote')} onChange={handleTagChange} />} label="Удалённо" />
            </FormGroup>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Город" name="location" value={formData.location} onChange={handleChange} fullWidth />
              <TextField label="Telegram" name="telegram" value={formData.telegram} onChange={handleChange} fullWidth />
            </Box>

            <TextField label="Ссылка на портфолио" name="portfolio" value={formData.portfolio} onChange={handleChange} fullWidth />
            
            <TextField label="Причина поиска работы" name="reason" value={formData.reason} onChange={handleChange} fullWidth multiline rows={2} />
            <TextField label="Общая информация" name="general_info" value={formData.general_info} onChange={handleChange} fullWidth multiline rows={4} />

            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={() => navigate('/catalog')}>Отмена</Button>
              <Button variant="contained" type="submit">Добавить кандидата</Button>
            </Box>
          </Box>
        </form>
      </Paper>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddCandidatePage;