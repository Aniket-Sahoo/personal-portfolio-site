import { Box, Grid2, Typography } from '@mui/material'
import ProjectCardList from './ProjectCardList'

const ProjectsSection = () => { 
  return (
    <Grid2 id='projects' container flexDirection={"column"} pt={{xs: "3rem", sm:"4rem"}} pb={{xs: "1rem", sm:"2.5rem"}} alignContent={"center"} >
      <Grid2 container justifyContent={{xs: "center", sm:"left"}} spacing={3}>
        <Typography variant="h1">My Projects</Typography>
      </Grid2>
        <ProjectCardList />
    </Grid2>
  )
}

export default ProjectsSection