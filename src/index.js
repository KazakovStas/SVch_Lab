import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // ← Добавляем импорт Provider
import { store } from './redux/store';    // ← Импортируем наш store
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Оборачиваем App в Provider и передаём store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);