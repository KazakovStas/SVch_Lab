import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],        
  status: 'idle',   
  error: null,    
};

const candidatesSlice = createSlice({
  name: 'candidates',  
  initialState,       
  
  reducers: {
    addCandidate: {
      prepare: (candidateData) => {
        if (!candidateData.name || !candidateData.name.trim()) {
          return {
            payload: null,
            error: 'Имя кандидата обязательно для заполнения',
          };
        }
        if (!candidateData.position || !candidateData.position.trim()) {
          return {
            payload: null,
            error: 'Должность обязательна для заполнения',
          };
        }
        if (!candidateData.salary || candidateData.salary < 0) {
          return {
            payload: null,
            error: 'Зарплата должна быть положительным числом',
          };
        }
        
        return {
          payload: {
            id: nanoid(),  
            ...candidateData,
          },
        };
      },
      reducer: (state, action) => {
        if (action.payload) {
          state.items.push(action.payload);
          state.error = null;  
        } else {
          state.error = action.error; 
        }
      },
    },

    loadCandidates: (state, action) => {
      state.items = action.payload;
      state.status = 'idle';
    },

    updateCandidate: (state, action) => {
      const { id, ...updatedData } = action.payload;
      
      if (!updatedData.name || !updatedData.name.trim()) {
        state.error = 'Имя не может быть пустым';
        return;  
      }
      
      const index = state.items.findIndex((c) => c.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedData };
        state.error = null;
      } else {
        state.error = 'Кандидат не найден';
      }
    },

    deleteCandidate: (state, action) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addCandidate,
  loadCandidates,
  updateCandidate,
  deleteCandidate,
  clearError,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;