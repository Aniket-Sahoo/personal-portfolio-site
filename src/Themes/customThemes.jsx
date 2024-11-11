import { createTheme } from '@mui/material/styles';
import baseTheme from './baseTheme';


// Dark Mode Theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    blue:{
      main:"#1976d2",
    },
    secondary: {
      main: '#F0DFAD',
    },
    brown: {
      main: '#8A3324',
    },
    hazel: {
      main: '#E5AA70',
    },
    green:{
      main:"#568203"
    },
    // warning:{
    //   main:'#ed6C02',
    // },
    background: {
      default: '#242424',
      paper: '#333333',
      board:"#171717"
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#bbbbbb',
    },
    gradientBackground: {
      primary: 'linear-gradient(90deg, #FF5733, #FFC300)',
      secondary: 'linear-gradient(90deg, #401818 0%, #A63F3F 100%)',
      tertiary: 'linear-gradient(180deg, #5F4A1C 0%, #846641 50%, #634646 100%)',
      card: 'linear-gradient(180deg, #827F7F 0%, #121212 100%)',
      // secondary: 
    },
  },
});

export const darkTheme2 = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    gradientBackground: {
      // primary: 'linear-gradient(90deg, #456fe8, #19b0ec)',
      primary: 'linear-gradient(270deg, #2feaa8, #028cf3)',
      secondary: 'linear-gradient(90deg, #0D2A4D 0%, #3C798D 100%)',
      tertiary: 'linear-gradient(180deg, #5F4A1C 0%, #846641 50%, #634646 100%)',
      card: 'linear-gradient(180deg, #736F6F 0%, #202020 100%)',
      // secondary:
    }
  },
})
