import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid2, Box, Container, Button } from '@mui/material';
import heroContent from '../Data/heroContent.json';
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
  const textContent = isSmallScreen? heroContent.small : heroContent.normal;

  return (
    <>
      <Box>
        <Typography variant="h6" pb={0.5}>
          {textContent.greeting}
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
          {textContent.name}
        </Typography>
      </Box>
      <Box py={3} pb={6}>
        <Typography variant="subtitle1" color='text.secondary' fontSize={{xs:"1.15rem", sm:"1.3rem"}}>  
          <Box component={"span"} sx={{fontWeight: "bold", color: "text.primary"}}>
            {textContent.about.role}
          </Box>
            {textContent.about.tagline}
        </Typography>
      </Box>
      <Box color={"text.secondary"} pl={0}>
        <Typography variant="subtitle1">  
          {textContent.anecdote1.emoji}&nbsp; {textContent.anecdote1.text}
        </Typography>
        <Typography variant="subtitle1">  
          {textContent.anecdote2.emoji}&nbsp; {textContent.anecdote2.text}
        </Typography>
      </Box>
      {/* <HeroButtons /> */}
    </>
  );
};

const HeroButtons = () => {
  const contactInfo = heroContent.contactInfo;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return(
    <Box py={6}>
      <Grid2 container spacing={2.5} justifyContent={"flex-start"}>
        {contactInfo.map((contact, index) => (
          <Grid2 key={index}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => handleClick(contact.link)}
              sx={{
                display: "flex",
                bgcolor: "background.paper", 
                color: "text.primary",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <img src={contact.icon} alt={`${contact.name} icon`} width={24} height={24} />
              <Typography>{contact.name}</Typography>
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

const ArrowIcon = () => {
  return (
    <Grid2 
      position="absolute" 
      bottom={0} 
      left={0}  // Set left to 0 so it takes the full width
      right={0} // Set right to 0 to take the full width
      display="flex" // Use flexbox to center the icon
      justifyContent="center"  // Center horizontally
      pb={3}
    >
      <ArrowDownwardIcon 
        fontSize="large" 
        sx={{
          color: "text.secondary",
          animation: `${bounceAnimation} 2s ease-in-out infinite` 
        }}
      />
    </Grid2>
  )
}

const HeroComponentCenter = () => {
  return (
    <Grid2 container direction={"column"} height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Container 
        sx={{
          position: "relative",
          px:{xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "9rem", xxl: "12rem"}, 
          py: {xs: "9rem", sm: "9rem"}, 
        }}
        >
        <HeroText />
        <HeroButtons />
        <ArrowIcon />
      </Container>
      {/* <ArrowIcon /> */}
    </Grid2>
  );
};

export default HeroComponentCenter;