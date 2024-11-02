import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import { Grid2, Box } from '@mui/material';
import ProjectTags from './ProjectTagsComponents';


const ProjectCard = () => {
  return (
    <Grid2 
      sx={{ display: 'flex', direction: 'column', borderRadius: 5, bgcolor: '#a1887f', flexGrow: 1}}
      size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}
    >
      <Grid2 p={2} flex={1}>
        <CardMedia 
          sx={{ height: 175, borderRadius:2 }}
          image="https://picsum.photos/1000/600"
          title="green iguana"
          objectfit="cover"
        />
      </Grid2>
      <CardContent>
        <Typography border={1} gutterBottom variant="h5" component="div">
          Portfolio Site
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, border: 1 }}>
          Created this site to display my projects and showcase my skills. Dive into my projects and
          discover who I am as a developer.
        </Typography>
        <ProjectTags/>
      </CardContent>
    </Grid2>
  );
}

export default ProjectCard;