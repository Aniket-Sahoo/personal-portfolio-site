import { Box, Grid2 } from '@mui/material';
import AboutButtons from './AboutButtons/AboutButtons';
import AboutButtons2 from './AboutButtons/AboutButtons2';
import AboutMe from './AboutMe';

const AboutSection = () => {
  return (
    <section id='about'>
      <Grid2 container direction={"column"} justifyItems={"center"} pt={"3rem"}>
        <AboutMe />
        <AboutButtons2 />
      </Grid2>
    </section>
  )
}

export default AboutSection;