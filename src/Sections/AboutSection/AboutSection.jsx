import { Box, Grid2 } from '@mui/material';
import AboutButtons from './AboutButtons/AboutButtons';
import AboutMe from './AboutMe';

const AboutSection = () => {
  return (
    <Grid2 container direction={"column"} justifyItems={"center"} pt={"3rem"}>
      <AboutMe />
      <AboutButtons />
    </Grid2>
  )
}

export default AboutSection;