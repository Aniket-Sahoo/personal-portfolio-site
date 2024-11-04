import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material';


const ImagePlaceholder = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // const src = isSmallScreen
  //   ? "https://picsum.photos/600/400"   // URL for small screens
  //   : isMediumScreen
  //   ? "https://picsum.photos/700/550"   // URL for medium screens
  //   : "https://picsum.photos/800/1000"; // URL for large screens

  return (
    <Box
        component="img"
        src="https://picsum.photos/800/1000" // 4:5 aspect ratio placeholder image
        alt="Placeholder"
        sx={{
            width: '100%',
            height: 'auto',
            maxHeight: "500px",
            maxWidth: "400px",
            objectFit: 'cover', // Ensures the image fills the container
            borderRadius: 2,
        }}
    />
  )
};

const AboutMeContent = ({data}) => {
  // Edit how you want to display the content
  return (
    <>
      <h3>{data.about[0]}</h3>
      <p>{data.description[0]}</p>
      <h3>{data.about[1]}</h3>
      <p>{data.description[1]}</p>
      <h3>{data.about[2]}</h3>
      <p>{data.description[2]}</p>
    </>
  )
}

const AboutMe2 = ({aboutMeData}) => {
  return (
    <>
      <Grid2 container flexGrow={1}  justifyContent={"center"}>
        <Grid2 container flexGrow={1} flex={1} columns={{ xs: 6, md: 12 }} spacing={3}>
          <Grid2 bgcolor={"#333333"} borderRadius={3} p={2.5} size={7} sx={{order: {xs: 2, md: 1}}}>
            <AboutMeContent data={aboutMeData} />
          </Grid2>
          <Grid2 size="grow" container justifyContent={"center"} sx={{order: {xs: 1, md: 2}}}>
            <ImagePlaceholder />
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  )
}

export default AboutMe2;