import { createTheme } from '@mui/material/styles';

export const Colors = {
  dark: '#0a0a0a',
  primary: '#042d29',
  accent: '#e74a33',
  light: '#fff',
  green: '#014322',
};

const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.accent },
    success: { main: Colors.green }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontWeight: 700,
      fontSize: '36px',
      textAlign: 'center'
    },
    h2: {
      fontWeight: 700,
      fontSize: '18px'
    },
    h3: {
      fontWeight: 500,
      fontSize: '16px',
      fontStyle: 'italic',
      textAlign: 'right',
    },
  }
});

export default theme;