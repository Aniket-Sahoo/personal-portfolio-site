import { Grid2 } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
  return (
    <Grid2 container columns={{ xs: 12, l: 12 }} justifyContent={{xs: "center", sm:"left"}} spacing={3} borderColor={"blue"}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Grid2>
  )
}

export default ProjectCardList;