import { Box, Grid2 } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterComponent = () => {
  return (
    <Grid2 container direction={"column"} color={"text.secondary"} component={"footer"} textAlign={"center"} pt={8} pb={3}>
      <Grid2 container direction={"column"} alignContent={"center"} alignItems={"center"} spacing={1}>
        <Box alignContent={"center"} alignSelf={"center"}>
          Designed and Developed by Aniket Sahoo.
        </Box>
        <Box>
          Built with React.js & Material UI
          <Box component={"span"} sx={{display: {xs: "none", sm: "inline"}}}> and a lil <FavoriteIcon sx={{color: "red", fontSize: "small"}}/></Box>
          . Hosted on Vercel
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default FooterComponent