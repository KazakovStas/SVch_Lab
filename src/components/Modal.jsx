import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Typography, 
  TextField, 
  Button, 
  IconButton, 
  Divider,
  Box
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Modal = ({ isOpen, onClose, candidate, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    if (candidate) {
      setEditData(candidate);
      setIsEditing(false);
    }
  }, [candidate]);

  if (!candidate) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }} 
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {isEditing ? 'Редактировать кандидата' : candidate.name}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'grey.500' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <Divider />

      <DialogContent sx={{ p: 3 }}>
        {!isEditing ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Должность</Typography>
              <Typography variant="body1">{candidate.position}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Опыт работы</Typography>
              <Typography variant="body1">{candidate.experience}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Зарплатные ожидания</Typography>
              <Typography variant="body1">{candidate.salary?.toLocaleString()} ₽</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Локация и возраст</Typography>
              <Typography variant="body1">{candidate.location || 'Не указана'}, {candidate.age || 'Не указан'}</Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>О себе</Typography>
              <Typography variant="body2">{candidate.general_info || 'Информация отсутствует'}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Причина поиска</Typography>
              <Typography variant="body2">{candidate.reason || 'Не указана'}</Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField 
              label="Имя" name="name" value={editData.name || ''} onChange={handleChange} fullWidth 
            />
            <TextField 
              label="Должность" name="position" value={editData.position || ''} onChange={handleChange} fullWidth 
            />
            <TextField 
              label="Зарплата" name="salary" type="number" value={editData.salary || ''} onChange={handleChange} fullWidth 
            />
            <TextField 
              label="О себе" name="general_info" value={editData.general_info || ''} onChange={handleChange} 
              fullWidth multiline rows={3} 
            />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        {!isEditing ? (
          <>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={() => { 
                if (window.confirm('Удалить кандидата?')) {
                  onDelete(candidate.id);
                  onClose();
                }
              }}
              sx={{ mr: 'auto' }} 
            >
              Удалить
            </Button>
            <Button variant="text" onClick={onClose}>Закрыть</Button>
            <Button variant="contained" onClick={() => setIsEditing(true)}>Редактировать</Button>
          </>
        ) : (
          <>
            <Button variant="text" onClick={() => setIsEditing(false)}>Отмена</Button>
            <Button variant="contained" onClick={handleSave}>Сохранить</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;