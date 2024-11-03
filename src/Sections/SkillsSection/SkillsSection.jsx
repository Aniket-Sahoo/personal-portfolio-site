import SkillsList from './SkillsList';
import skills from '../../Data/Skills.json';
import { Box, Grid2 } from '@mui/material';

const SkillsSection = () => {
  return (
    <Grid2 container spacing={0} flexDirection={"column"}>
      <Grid2 container justifyContent={{xs: "center", sm:"left"}}>
        <h1>Skills</h1>
      </Grid2>
      <SkillsList skills={skills}/>
    </Grid2>
  )
}

export default SkillsSection;