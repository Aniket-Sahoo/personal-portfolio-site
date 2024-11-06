// theme.js
import { Zoom } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { col } from 'framer-motion/client';

const baseTheme = createTheme({
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          transition: 'padding 0.25s ease, margin 0.25s ease, font-size 0.25s ease, width 0.25s ease, height 0.25s ease',
        },
      },
    },
  },
  // Custom typography
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      paddingBlockEnd: '1.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    p: {
      fontSize: '0.8rem',
    },
    button: {
      textTransform: 'none',
    },
    icontag:{
      fontSize: '0.7rem',
      color: '#F2F3F4',
    },
  }
});

export default baseTheme;
