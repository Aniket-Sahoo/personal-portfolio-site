import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid2, Box, Container } from '@mui/material';
import heroText from '../Data/heroText.json';
import { useTheme, useMediaQuery } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { keyframes } from '@mui/system';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }`;

const HeroText = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const content = isSmallScreen? heroText.small : heroText.normal;
  return (
    <Container sx={{px:{xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "9rem", xxl: "12rem"}, py: {xs: "9rem", sm: "9rem"}}}>
      <Box>
        <Typography variant="h6" pb={0.5}>
          {content.greeting}
        </Typography>
        <Typography 
          variant="h1"
          fontSize={{xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem"}}
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
        <Typography variant="subtitle1" color='text.secondary' fontSize={{xs:"1.15rem", sm:"1.3rem"}}>  
          <Box component={"span"} sx={{fontWeight: "bold", color: "text.primary"}}>
            {content.about.role}
          </Box>
            {content.about.tagline}
        </Typography>
      </Box>
      <Box color={"text.secondary"} pl={0}>
        <Typography variant="subtitle1">  
          {content.anecdote1.emoji}&nbsp; {content.anecdote1.text}
        </Typography>
        <Typography variant="subtitle1">  
          {content.anecdote2.emoji}&nbsp; {content.anecdote2.text}
        </Typography>
      </Box>
    </Container>
  );
};

const HeroComponentCenter = () => {
  return (
    <Grid2 container direction={"column"} height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <HeroText />
      <ArrowDownwardIcon 
        fontSize="large" 
        sx={{
          color: "text.secondary",
          animation: `${bounceAnimation} 2s ease-in-out infinite` 
        }}
      />
    </Grid2>
  );
};

export default HeroComponentCenter;