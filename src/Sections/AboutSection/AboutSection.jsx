import { Box, Grid2 } from '@mui/material';
import AboutButtons2 from './AboutButtons/AboutButtons2';
import AboutMe2 from './AboutMe2';
import data from '../../Data/about.json'

const AboutSection = () => {
  return (
      <Grid2 id='about'container direction={"column"} justifyItems={"center"} pt={"3rem"}>
        <Box mb={1.5}>
          <Box component={"h1"} my={1}>{data.heading}</Box>
          <Box component={"q"}>{data.quote}</Box>
        </Box>
        <AboutMe2 aboutMeData={data}/>
        <AboutButtons2 />
      </Grid2>
  )
}

export default AboutSection;