import Typography from '@mui/material/Typography';
import { Grid2, Box } from '@mui/material';

const ProjectTags2 = ({projectTags}) => {
  return (
    <Grid2 container pt={1} spacing={0.5}>
      {
        projectTags.map((tag, index) => {
          return (
            <Typography variant="body2" bgcolor={tag.color} sx={{filter: "brightness(100%)"}} color="" p={0.75} borderRadius={2} key={index}>
              {tag.name}
            </Typography>
          )
        })
      }
    </Grid2>
  )
}

export default ProjectTags2;