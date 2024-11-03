import Typography from '@mui/material/Typography';
import { Grid2, Button, Box } from '@mui/material';

const ProjectTags = ({projectTags}) => {
  return (
    <Grid2 container pt={1} spacing={0.5}>
      {
        projectTags.map((tag, index) => {
          return (
            <Button variant="outlined" size='small' sx={{color: tag.color, borderColor: tag.color, filter: "brightness(80%)"}} p={0.75} key={index}>
              {tag.name}
            </Button>
          )
        })
      }
    </Grid2>
  )
}

export default ProjectTags;