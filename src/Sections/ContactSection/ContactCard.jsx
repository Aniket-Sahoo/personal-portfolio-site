import { Box, Grid2 } from "@mui/material"
import { shadows } from '@mui/system';


const ContactCard = () => {
  return (
    <Grid2 sx={{flexGrow: 1, bgcolor: '#474747', borderRadius: 2, boxShadow: 4}}>
      <h1>Contact Me</h1>
    </Grid2>
  )
}

export default ContactCard