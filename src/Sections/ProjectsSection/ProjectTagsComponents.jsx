import Typography from '@mui/material/Typography';
import { Grid2, Button, Box } from '@mui/material';
import { alpha, lighten } from "@mui/material/styles";

const ProjectTags = ({projectTags}) => {
  return (
    <Grid2 container py={1} spacing={0.5}>
      {
        projectTags.map((tag, index) => {
          return (
            <Box 
              px={0.75} 
              py={0.1}
              key={index} 
              sx={{
                background: alpha(tag.color, 0.2), 
                // color: tag.color, 
                borderRadius: 2,
                borderColor: tag.color, 
              }} 
            >
              <Typography 
                variant="p" fontSize={"0.82rem"} fontWeight={505}
                sx={{ color: lighten(tag.color, 0.1) }}
              >
                {tag.name}
              </Typography>
            </Box>
          )
        })
      }
    </Grid2>
  )
}

export default ProjectTags;