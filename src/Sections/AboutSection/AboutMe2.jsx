import { Box, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';


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
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease-in-out, transform 0.5s ease-in-out",
            '&:hover': {
              filter: "grayscale(0%)",
              transform: 'scale(1.05)'
            },
        }}
    />
  )
};

const AboutMeContent = ({data}) => {
  // Edit how you want to display the content
  return (
    <>
      {data.map((section, index) => (
        <Box key={index} pb={2.5}>
          <Typography variant={"h3"} mt={0} mb={0.5}>{section.title}</Typography>
          <Typography variant={"p"} my={0} fontSize={"0.9rem"}>{section.description}</Typography>
        </Box>
      ))}
    </>
  )
}

const AboutMe2 = ({data}) => {
  return (
    <>
      <Grid2 container flexGrow={1}  justifyContent={"center"}>
        <Grid2 container flexGrow={1} flex={1} columns={{ xs: 6, md: 12 }} spacing={3}>
          <Grid2 bgcolor={"background.paper"} borderRadius={3} p={2.5} size={7} sx={{order: {xs: 2, md: 1}}}>
            <AboutMeContent data={data.sections} />
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