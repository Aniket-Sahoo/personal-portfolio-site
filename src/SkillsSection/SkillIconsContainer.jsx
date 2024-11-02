import { IconButton, Tooltip, Grid2 } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';

const SkillIcon = ({skill}) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log(skill.icon);
  return (
    <Tooltip title={skill.name} placement='top' arrow>
      <IconButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={isHovered ? skill.hovericon : skill.icon} alt={skill.name} width={50} height={50} />
      </IconButton>
    </Tooltip>
  );
};

const SkillIconContainer = ({skillGroup}) => {
  return (
    <Grid2 container border={1} spacing={3}>
      {
        skillGroup.skills.map((skill, index) => {
          return skill.icon && <SkillIcon key={index} skill={skill} />;
        })
      }
    </Grid2>
  )
}

export default SkillIconContainer;
