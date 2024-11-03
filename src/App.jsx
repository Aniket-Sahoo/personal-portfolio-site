import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import NavBar2 from './NavBar/NavBar2'
import NavBar3 from './NavBar/NavBar3'
import AboutSection from './AboutSection/AboutSection'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import SkillsSection from './SkillsSection/SkillsSection'
import ContactSection from './ContactSection/ContactSection'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar3 /> */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default App
