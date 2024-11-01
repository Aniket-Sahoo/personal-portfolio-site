import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './NavBar/NavBar'
import NavBar2 from './NavBar/NavBar2'
import NavBar3 from './NavBar/NavBar3'
import AboutSection from './About/AboutSection'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar3 /> */}
      <AboutSection />
    </>
  )
}

export default App
