// theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
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
    background: {
      default: '#242424',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888',
    },
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

export default darkTheme;
