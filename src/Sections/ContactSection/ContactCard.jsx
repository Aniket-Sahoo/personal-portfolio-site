import { Box, Grid2, Link } from "@mui/material"
import { shadows } from '@mui/system';

background: 'linear-gradient(180deg, #686363 0%, #7F6868 40%, #202020 100%)'
const ContactCard = ({email}) => {
  return (
    <Grid2 container bgcolor={"#171717"} justifyContent={"center"} py={3} borderRadius={2}>
      <Link href={`mailto:${email}`} sx={{textDecoration: "none", color: "inherit"}}>
        <Box component={"h1"}>
          Keep in <Box component="span" color="primary.main"> touch </Box> ✉️
        </Box>
      </Link>
    </Grid2>
  )
}

export default ContactCard