// theme.js
import { Zoom } from '@mui/material';
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
    background: {
      default: '#242424',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888',
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
  },
  // // Custom spacing for padding/margin
  // spacing: 8, // Default base spacing unit
  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       root: {
  //         paddingLeft: '24px', // Custom padding for Container component
  //         paddingRight: '24px',
  //       },
  //     },
  //   },
  // },
});

export default theme;
