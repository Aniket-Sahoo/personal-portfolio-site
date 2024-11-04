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
            p={{xs: 1.3,sm: 1.5, md: 1.7, lg: 2}} bgcolor="#00000f" borderRadius={2} alignItems={"center"}
            sx={{
              transition: "all 0.4s ease", "&:hover": {bgcolor: "#00000f", color: "white"},
              fontSize: isHovered ? 
                { xs: "1.5rem",sm: "2.6rem", md: "3rem", lg: "3.5rem" } 
                : { xs: "1.5rem",sm: "2rem", md: "2rem", lg: "2.5rem" }
            }}
          >
            <Box>
              {hobby.emoji}
            </Box>
          </Box>
      </Tooltip>
  );
};

export default HobbiesIcon;