import { Grid2 } from '@mui/material';
import ProjectCard from './ProjectCard';
import projectList from '../../Data/projects.json';

const ProjectCardList = () => {
  return (
    <Grid2 container columns={{ xs: 12, l: 12 }} justifyContent={{xs: "center", sm:"left"}} spacing={3} borderColor={"blue"}>
      {projectList.map((project, index) => {
        return (
          <ProjectCard key={index} project={project} />
        )
      })}
    </Grid2>
  )
}

export default ProjectCardList;