import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ThemeProvider>
);


