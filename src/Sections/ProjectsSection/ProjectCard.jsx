import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid2, Box } from '@mui/material';
import ProjectTags from './ProjectTagsComponents';


const ProjectCard = ({project}) => {
  return (
    <Grid2 
      size={{xs: 12, sm: 6, md: 6, lg: 4}} 
      sx={{borderRadius: 5, bgcolor: '#a1887f', background: 'linear-gradient(180deg, #686363 0%, #7F6868 40%, #202020 100%)'}}
    >
      <Grid2 px={2} pt={2} flex={1}>
        <CardMedia 
          sx={{ height: 175, borderRadius:2, filter:"brightness(85%) contrast(110%)" }}
          image={project.image}
          title={project.title}
          objectfit="cover"
        />
      </Grid2>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1}}>
          {project.description}
        </Typography>
        <ProjectTags projectTags={project.tags}/>
        {/* <ProjectTags2 projectTags={project.tags}/> */}
      </CardContent>
    </Grid2>
  );
}

export default ProjectCard;