// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Custom breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1000,
      xl: 1250,
      xxl: 1424,
      xxxl: 1600,
    },
  },
  // Custom color palette
  palette: {
    primary: {
      main: '#4caf50', // Main color
      light: '#81c784',
      dark: '#388e3c',
    },
    secondary: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    background: {
      default: '#f4f6f8',
    },
    text: {
      primary: '#333333',
      secondary: '#888888',
    },
  },
  // Custom typography
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  // Custom spacing for padding/margin
  spacing: 8, // Default base spacing unit
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px', // Custom padding for Container component
          paddingRight: '24px',
        },
      },
    },
  },
});

export default theme;
