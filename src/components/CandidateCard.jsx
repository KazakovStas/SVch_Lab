import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Box, 
  Button, 
  IconButton, 
  Avatar 
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CandidateCard = ({ candidate, isSelected, onSelect, onDelete }) => {
  
  const getBadgeText = (tag) => {
    if (tag === 'fulltime') return 'Полная занятость';
    if (tag === 'parttime') return 'Частичная занятость';
    if (tag === 'remote') return 'Удалённо';
    return tag;
  };

  const getBadgeColor = (tag) => {
    if (tag === 'fulltime') return 'success';
    if (tag === 'parttime') return 'warning';
    if (tag === 'remote') return 'info';
    return 'default';
  };

  const isGradient = candidate.avatar?.startsWith('gradient-');
  const avatarSrc = isGradient ? null : (candidate.avatar || '/img/default-avatar.png');

  return (
    <Card 
      sx={{ 
        position: 'relative', 
        cursor: 'pointer',
        border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
      onClick={onSelect}
    >
      <IconButton 
        sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.9)', zIndex: 1 }}
        onClick={(e) => { 
          e.stopPropagation(); 
          onDelete(candidate.id); 
        }}
        size="small"
      >
        <DeleteIcon color="error" fontSize="small" />
      </IconButton>

      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 3 }}>
        
        <Avatar
          src={avatarSrc}
          alt={candidate.name}
          sx={{ 
            width: 104, 
            height: 104, 
            mb: 2,
            bgcolor: isGradient ? '#667eea' : undefined,
            fontSize: 36,
            fontWeight: 'bold'
          }}
        >
          {!avatarSrc && candidate.name?.charAt(0).toUpperCase()}
        </Avatar>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5, justifyContent: 'center' }}>
          {candidate.tags?.map((tag, index) => (
            <Chip 
              key={index} 
              label={getBadgeText(tag)} 
              size="small" 
              color={getBadgeColor(tag)}
              variant="outlined"
            />
          ))}
        </Box>

        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 0.5, textAlign: 'center' }}>
          {candidate.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
          {candidate.position}
        </Typography>

        <Box sx={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 0.5, 
          mb: 2,
          pt: 1.5,
          borderTop: '1px solid #e0e0e0'
        }}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Опыт: {candidate.experience}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Зарплата: от {candidate.salary?.toLocaleString()} ₽
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          fullWidth 
          component={Link} 
          to={`/profile/${candidate.id}`}
          onClick={(e) => e.stopPropagation()}
          sx={{ 
            textTransform: 'none', 
            borderRadius: 2,
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' }
          }}
        >
          Посмотреть справку
        </Button>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;