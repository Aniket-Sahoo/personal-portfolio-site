import { Box, Grid2 } from '@mui/material';
import data from '../Data/about.json'

const ImagePlaceholder = () => (
  <Box
      component="img"
      src="https://picsum.photos/800/1000" // 4:5 aspect ratio placeholder image
      alt="Placeholder"
      sx={{
          width: '100%',
          height: '100%',
          maxHeight: '500px',
          maxWidth: '400px',
          objectFit: 'cover', // Ensures the image fills the container
          borderRadius: 1,
      }}
  />
);

const AboutMeContent = () => {
  // Edit how you want to display the content
  return (
    <>
      <h1>{data.heading}</h1>
      <p>{data.quote}</p>
      <h2>{data.about[0]}</h2>
      <p>{data.description[0]}</p>
      <h2>{data.about[1]}</h2>
      <p>{data.description[1]}</p>
      <h2>{data.about[2]}</h2>
      <p>{data.description[2]}</p>
    </>
  )
}

const AboutMe = () => {
  return (
    <>
      <Grid2 container flexGrow={1} border={1} justifyContent={"center"}>
        <Grid2 container flexGrow={1} border={1} borderColor={'green'}  columns={{ xs: 6, sm: 12 }} p={1} spacing={3} maxWidth={"1300px"}>
          <Grid2 size={7} border={1} borderColor={"red"}>
            <AboutMeContent />
          </Grid2>
          <Grid2 size="grow" container border={1} borderColor={"blue"} justifyContent={"center"}>
            <ImagePlaceholder />
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  )
}

export default AboutMe;