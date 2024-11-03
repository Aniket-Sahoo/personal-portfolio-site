import { Grid2 } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';
import projectList from '../../Data/projects.json';

const ProjectCardList = () => {
  return (
    <Grid2 container columns={{ xs: 12, l: 12 }} justifyContent={{xs: "center", sm:"left"}} spacing={3} borderColor={"blue"}>
      {projectList.map((project, index) => {
        return (
          <ProjectCard2 key={index} project={project} />
        )
      })}
    </Grid2>
  )
}

export default ProjectCardList;