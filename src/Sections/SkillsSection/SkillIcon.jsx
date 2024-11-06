import { useState } from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';

const SkillIcon = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tooltip title={skill.name} placement="top" arrow>
      <IconButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Box
          sx={{
            position: 'relative',
            width: 50,
            height: 50,
            overflow: 'hidden',
          }}
        >
          {/* Normal icon */}
          <Box
            component="img"
            src={skill.icon}
            alt={skill.name}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: isHovered ? 0 : 1, // Hide when hovered
              transition: 'opacity 0.5s ease', // Transition for opacity
            }}
          />

          {/* Hover icon */}
          <Box
            component="img"
            src={skill.hovericon}
            alt={skill.name}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: isHovered ? 1 : 0, // Show when hovered
              transition: 'opacity 0.5s ease', // Transition for opacity
            }}
          />
        </Box>
      </IconButton>
    </Tooltip>
  );
};

export default SkillIcon;
