import { Grid2, Link } from "@mui/material";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ContactIcon = ({contact}) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Tooltip title={contact.name} placement='top' arrow>
      <Link href={contact.link} target="_blank" rel="noopener noreferrer">
        <IconButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={isHovered ? contact.hovericon : contact.icon} alt={contact.name} width={50} height={50} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

const ContactIcons = ({contactInfo}) => {
  return (
    <Grid2>
      {
        contactInfo.map((contact, index) => {
          return <ContactIcon key={index} contact={contact} />;
        })
      }
    </Grid2>
  );
}

export default ContactIcons