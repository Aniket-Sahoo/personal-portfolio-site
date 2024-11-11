import { useEffect, useState } from 'react'
import NavBar3 from './NavBar/NavBar3'
import AboutSection from './Sections/AboutSection/AboutSection'
import ProjectsSection from './Sections/ProjectsSection/ProjectsSection'
import SkillsSection from './Sections/SkillsSection/SkillsSection'
import ContactSection from './Sections/ContactSection/ContactSection'
import { CssBaseline, Grid2, ThemeProvider } from '@mui/material'
import FooterComponent from './Footer/FooterComponent'
import HeroComponent from './HeroComponent/HeroComponent'
import { darkTheme } from './Themes/customThemes';
import Clarity from '@microsoft/clarity';


const getClarityProjectId = async () => {
  if (import.meta.env.MODE === 'development') {
    // Use local environment variable for development
    return import.meta.env.VITE_CLARITY_PROJECT_ID;
  } else {
    // Fetch from serverless function for staging/production
    const res = await fetch('/api/getClarityProjectId');
    const data = await res.json();
    console.log("projectId fetched: ", data);
    return data.projectId;
  }
};


const App = () => {

  const [clarityProjectId, setClarityProjectId] = useState(null);

  useEffect(() => {
    const fetchProjectId = async () => {
      const projectId = await getClarityProjectId();
      setClarityProjectId(projectId);
    };
    
    fetchProjectId();
  }, []);

  useEffect(() => {
    if (clarityProjectId) {
      Clarity.init(clarityProjectId);
      console.log("Clarity initialized");
    }
    else{
      console.log("Clarity not initialized");
    }
  }, [clarityProjectId]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar3 />
      <HeroComponent />
      <Grid2 container justifyContent={"center"}>
        <Grid2 container direction={"column"} maxWidth={"1450px"} sx={{px: {xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "10rem", xxl: "12rem"}}} >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <FooterComponent />
        </Grid2>
      </Grid2>
    </ThemeProvider>
  )
}

export default App
