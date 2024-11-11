import { Tooltip, IconButton, Box, Link } from "@mui/material";
import { useState } from "react";
import clarity from '@microsoft/clarity';

const ContactIcon = ({contact}) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (contact) => {
    window.open(contact.link, "_blank", "noopener,noreferrer");
    clarity.event(`Footer_Contact_Click: ${contact.name}`);
  }

  return (
    <Tooltip title={contact.name} placement="top" arrow>
      <IconButton 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(contact)}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: 30, sm: 40, md: 45, lg: 50 },
            height: { xs: 30, sm: 40, md: 45, lg: 50 },
            overflow: 'hidden',
          }}
        >
          {/* Normal icon */}
          <Box
            component="img"
            src={contact.icon}
            alt={contact.name}
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
            src={contact.hovericon}
            alt={contact.name}
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

export default ContactIcon;