import { Box, IconButton, Tooltip, Grid2 } from "@mui/material";
import { useState } from "react";

const HobbiesIcon = ({hobby}) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <Tooltip title={hobby.name} placement='top' arrow>
          <Box 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            p={2} bgcolor="#00000f" borderRadius={2} alignItems={"center"}
          >
            <Box fontSize={isHovered ? "3rem" : "2rem"}>
              {hobby.emoji}
            </Box>
          </Box>
      </Tooltip>
  );
};

export default HobbiesIcon;