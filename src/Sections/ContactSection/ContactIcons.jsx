import { Grid2, Link, Box } from "@mui/material";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ContactIcon from "./ContactIcon";


const ContactIcons = ({contactInfo}) => {

  return (
    <Grid2 container p={2} justifyContent={"center"} spacing={2}>
      {
        contactInfo.map((contact, index) => {
          return <ContactIcon key={index} contact={contact} />;
        })
      }
    </Grid2>
  );
}

export default ContactIcons