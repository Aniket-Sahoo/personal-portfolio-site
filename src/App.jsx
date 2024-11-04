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
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {/* <NavBar3 /> */}
      <Grid2 container justifyContent={"center"}>
        <Grid2 container direction={"column"} maxWidth={"1450px"} sx={{px: {xs: "1.5rem", sm: "2rem", md: "4.5rem", lg: "6rem", xl: "10rem", xxl: "12rem"}}} >
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Grid2>
      </Grid2>
    </ThemeProvider>
  )
}

export default App
