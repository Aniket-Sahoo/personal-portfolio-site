import { Box, Grid2 } from '@mui/material'
import ProjectCardList from './ProjectCardList'

const ProjectsSection = () => { 
  return (
    <Grid2 id='projects' container flexDirection={"column"} pt={"3rem"} alignContent={"center"} >
      <Grid2 container justifyContent={{xs: "center", sm:"left"}} spacing={3}>
        <h1>Projects</h1>
      </Grid2>
        <ProjectCardList />
    </Grid2>
  )
}

export default ProjectsSection