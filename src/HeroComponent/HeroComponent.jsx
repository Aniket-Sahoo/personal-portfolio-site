import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid2, Box, Container } from '@mui/material';
import heroText from '../Data/heroText.json';
import { useTheme, useMediaQuery } from '@mui/material';

const HeroText = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const content = isSmallScreen? heroText.small : heroText.normal;
  return (
    <Container px={{xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "10rem", xxl: "12rem"}}>
      <Box>
        <Typography variant="h6" pb={0.5}>
          {content.greeting}
        </Typography>
        <Typography 
          variant="h1"
          fontSize={{xs: "3rem", sm: "3rem", md: "3.5rem", lg: "4rem"}}
          sx={{
            background: theme.palette.gradientBackground.primary,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >  
          {content.name}
        </Typography>
      </Box>
      <Box py={3} pb={6}>
        <Typography variant="subtitle1" color='text.secondary' fontSize={"1.3rem"}>  
          <Box component={"span"} sx={{fontWeight: "bold", color: "text.primary"}}>
            {content.about.role}
          </Box>
            {content.about.tagline}
        </Typography>
      </Box>
      <Box color={"text.secondary"}>
        <Typography variant="subtitle1">  
          {content.anecdote1.emoji} {content.anecdote1.text}
        </Typography>
        <Typography variant="subtitle1">  
          {content.anecdote2.emoji} {content.anecdote2.text}
        </Typography>
      </Box>
    </Container>
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