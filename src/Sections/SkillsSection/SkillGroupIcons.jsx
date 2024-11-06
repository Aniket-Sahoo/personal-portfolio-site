import { IconButton, Tooltip, Grid2 } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import SkillIcon from './SkillIcon';

const SkillGroupIcons = ({skillGroup}) => {
  return (
    <Grid2 container spacing={2}>
      {
        skillGroup.skills.map((skill, index) => {
          return skill.icon && <SkillIcon key={index} skill={skill} />;
        })
      }
    </Grid2>
  )
}

export default SkillGroupIcons;
