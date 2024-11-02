import SkillsList from './SkillsList';
import skills from '../Data/Skills.json';
import { Box, Grid2 } from '@mui/material';

const SkillsSection = () => {
  return (
    <Grid2 container spacing={0} border={1} p={2} alignItems={"center"} flexDirection={"column"}>
      <h1>Skills</h1>
      <SkillsList skills={skills}/>
    </Grid2>
  )
}

export default SkillsSection;