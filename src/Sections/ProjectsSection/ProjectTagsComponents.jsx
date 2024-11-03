import Typography from '@mui/material/Typography';
import { Grid2, Box } from '@mui/material';

const Tags = () => {
  return (
    <Grid2 container spacing={0.5} border={1}>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        Web Dev
      </Typography>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        React
      </Typography>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        Material UI
      </Typography>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        React
      </Typography>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        React
      </Typography>
      <Typography variant="body2" bgcolor={'#80d8ff'} color="text.secondary" p={0.75} borderRadius={2}>
        React
      </Typography>
    </Grid2>
  )
}

export default Tags;