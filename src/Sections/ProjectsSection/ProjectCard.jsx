import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid2, Box, Link, useTheme } from '@mui/material';
import ProjectTags from './ProjectTagsComponents';
import { GitHub } from '@mui/icons-material';

const LinkButtons = ({links}) => {
  return (
    <Grid2 container py={0.5} direction={"row"} spacing={1} alignContent={"center"}>
    {
      links.map((link, index) => {
        return (
          <Grid2 key={index} container>
            <Link 
              href={link.link} 
              target="_blank" rel="noopener noreferrer" 
              sx={{ textDecoration: "none"}}>
              <Box
                component="img"
                color={link.color}
                src={link.icon}
                sx={{ 
                  width: 25, 
                  height: 25,
                  filter: 'invert(0.9) brightness(90%)',
                }}
                alt={link.name}
                
              />
            </Link>
          </Grid2>
        )
      })
    }
    </Grid2> 
  )
}

const ProjectCard = ({project}) => {
  const theme = useTheme();
  return (
    <Grid2 
      size={{xs: 12, sm: 6, md: 6, lg: 4}} 
      sx={{borderRadius: 5, boxShadow:4 ,background: theme.palette.gradientBackground.card}}
    >
      <Grid2 px={2} pt={2} flex={1}>
        <CardMedia 
          sx={{ height: 175, borderRadius:2, filter:"brightness(85%) contrast(110%)" }}
          image={project.image}
          title={project.title}
          objectfit="cover"
        />
      </Grid2>
      <CardContent sx={{px: 2}}>
        <Typography gutterBottom variant="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1}}>
          {project.description}
        </Typography>
        <LinkButtons links={project.links}/>
        <ProjectTags projectTags={project.tags}/>
      </CardContent>
    </Grid2>
  );
}

export default ProjectCard;