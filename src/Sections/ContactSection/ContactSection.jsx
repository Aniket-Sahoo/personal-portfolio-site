import { Box, Grid2 } from "@mui/material";
import ContactIcons from "./ContactIcons";
import contactInfo from "../../Data/contactInfo.json"
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <Grid2 container pt={"4rem"} alignItems={"center"} direction={"column"}>
      <ContactCard/>
      <ContactIcons contactInfo={contactInfo}/>
    </Grid2>
  )
}

export default ContactSection