import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid2, Box } from '@mui/material';

const HeroText = () => {
  return (
    <Box px={{xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "10rem", xxl: "12rem"}}>
      <Box>
        <Typography variant="h6" pb={0.5}>
          Hey there! I'm
        </Typography>
        <Typography 
          variant="h1"
          fontSize={{xs: "2.3rem", sm: "3rem", md: "3.5rem", lg: "4rem"}}
          sx={{
            background: 'linear-gradient(90deg, #FF5733, #FFC300)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >  
          ANIKET SAHOO.
        </Typography>
      </Box>
      <Box py={3}>
        <Typography variant="subtitle1">  
          I love to solve problems and create beautiful interfaces. I am a full-stack developer with a passion for creating innovative solutions.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">  
          I'm currently seeking full-time opportunities and kickstarting my career
        </Typography>
        <Typography variant="subtitle1">  
          Check out my projects below
        </Typography>
      </Box>
    </Box>
  );
};

const HeroComponentCenter = () => {
  return (
    <Grid2 container height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <HeroText />
    </Grid2>
  );
};

export default HeroComponentCenter;