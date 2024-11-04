import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          color: 'white',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Typography variant="h1">
          Welcome to my portfolio!
        </Typography>
        <Typography variant="subtitle1">  
          I'm a software developer with a passion for creating innovative solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroComponent;