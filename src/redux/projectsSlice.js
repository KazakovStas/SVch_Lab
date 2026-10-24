import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: {
      prepare: (projectData) => {
        if (!projectData.title || !projectData.title.trim()) {
          return { payload: null, error: 'Название проекта обязательно' };
        }
        if (!projectData.budget || projectData.budget <= 0) {
          return { payload: null, error: 'Бюджет должен быть положительным числом' };
        }
        return {
          payload: {
            id: nanoid(),
            createdAt: new Date().toISOString(),
            ...projectData,
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

    loadProjects: (state, action) => {
      state.items = action.payload;
      state.status = 'idle';
    },

    updateProject: (state, action) => {
      const { id, ...updatedData } = action.payload;
      
      if (!updatedData.title || !updatedData.title.trim()) {
        state.error = 'Название проекта не может быть пустым';
        return;
      }
      
      const index = state.items.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedData };
        state.error = null;
      } else {
        state.error = 'Проект не найден';
      }
    },

    deleteProject: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addProject,
  loadProjects,
  updateProject,
  deleteProject,
  clearError,
} = projectsSlice.actions;

export default projectsSlice.reducer;