import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid2, Box } from '@mui/material';
import ProjectTags from './ProjectTagsComponents';
import ProjectTags2 from './ProjectTagsComponent2';

const ProjectCard2 = ({project}) => {
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }} sx={{ borderRadius: 5 }}>
      <Card 
        sx={{
          background: 'linear-gradient(180deg, #686363 0%, #7F6868 40%, #202020 100%)', // Gradient background
          borderRadius: 5,
          padding: 2
        }}
      >
        <CardMedia 
          sx={{ height: 175, borderRadius: 2 }}
          image={project.image}
          title={project.title}
          objectFit="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            {project.description}
          </Typography>
          <ProjectTags projectTags={project.tags}/>
          <ProjectTags2 projectTags={project.tags}/>
        </CardContent>
      </Card>
    </Grid2>
  );
}

export default ProjectCard2;
