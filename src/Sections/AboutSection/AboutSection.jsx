import { Box, Grid2 } from '@mui/material';
import AboutButtons2 from './AboutButtons/AboutButtons2';
import AboutMe2 from './AboutMe2';
import data from '../../Data/about.json'

const AboutSection = () => {
  return (
      <Grid2 id='about' container direction={"column"} justifyItems={"center"} pt={6}>
        <Grid2 container direction={"column"} mb={1.5} alignItems={{xs: "center", sm:"flex-start"}}>
          <Box component={"h1"} mb={1} pt={0}>{data.heading}</Box>
          <Box component={"q"}>{data.quote}</Box>
        </Grid2>
        <AboutMe2 data={data}/>
        <AboutButtons2 />
      </Grid2>
  )
}

export default AboutSection;