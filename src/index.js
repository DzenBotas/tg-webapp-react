import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    /** Put your mantine theme override here */
    backgroundColor: 'var(--tg-theme-secondary-bg-color)',
    color: 'var(--tg-theme-text-color)',
    fontFamily: "'Inter', -apple-system, 'BlinkMacSystemFont', system-ui, 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif"
  });

root.render(
  
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MantineProvider>
);

