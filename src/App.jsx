import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import NavBar2 from './NavBar/NavBar2'
import NavBar3 from './NavBar/NavBar3'
import AboutSection from './Sections/AboutSection/AboutSection'
import ProjectsSection from './Sections/ProjectsSection/ProjectsSection'
import SkillsSection from './Sections/SkillsSection/SkillsSection'
import ContactSection from './Sections/ContactSection/ContactSection'
import { CssBaseline, Grid2, ThemeProvider } from '@mui/material'
import theme from './customTheme';
import FooterComponent from './Footer/FooterComponent'
import HeroComponent from './HeroComponent/HeroComponent'
// import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar3 />
      <HeroComponent />
      <Grid2 container justifyContent={"center"}>
        <Grid2 container direction={"column"} maxWidth={"1450px"} sx={{px: {xs: "1rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "10rem", xxl: "12rem"}}} >
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <FooterComponent />
        </Grid2>
      </Grid2>
    </ThemeProvider>
  )
}

export default App
