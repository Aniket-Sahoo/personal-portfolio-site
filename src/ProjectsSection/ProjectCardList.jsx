import { Grid2 } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
  return (
    <Grid2 container border={1} justifyContent={"center"}>
      <Grid2 border={1} container spacing={3} justifyContent={"center"} maxWidth={'1300px'}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid2>
    </Grid2>
  )
}

export default ProjectCardList;