import { Box, Grid2 } from '@mui/material'
import ProjectCard2 from './ProjectCard2'
import ProjectCardList from './ProjectCardList'

const ProjectsSection = () => { 
  return (
    <Grid2 container border={1} alignContent={"center"} flexDirection={"column"}>
      <Grid2 container justifyContent={{xs: "center", sm:"left"}} border={1} spacing={3}>
        <h1>Projects</h1>
      </Grid2>
      <Grid2 container columns={{ xs: 12, xl: 15 }} justifyContent={{xs: "center", sm:"left"}} spacing={3} border={1} borderColor={"blue"}>
        <ProjectCard2 />
        <ProjectCard2 />
      </Grid2>
    </Grid2>
  )
}

export default ProjectsSection