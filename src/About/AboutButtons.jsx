import { Button, Grid2 } from '@mui/material';

const AboutButtons = () => {
  return (
    <Grid2 container>
      <Button variant="contained" color="primary">Work Experience</Button>
      <Button variant="contained" color="secondary">Education</Button>
      <Button variant='contained' color='success'>Skills</Button>
      <Button variant='contained' color='warning'>Hobbies</Button>
    </Grid2>
  )
}

export default AboutButtons;