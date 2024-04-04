import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    /** Put your mantine theme override here */
    // backgroundColor: 'var(--tg-theme-bg-color)',
    // color: 'var(--tg-theme-text-color)'
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

