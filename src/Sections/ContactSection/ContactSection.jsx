import { Box, Grid2 } from "@mui/material";
import ContactIcons from "./ContactIcons";
import contactInfo from "../../Data/contactInfo.json"
import ContactCard from "./ContactCard";
import ContactCard2 from "./ContactCard2";

const ContactSection = () => {
  return (
    // <Grid2 container flexDirection={"column"} pt={"3rem"} alignContent={"center"} ></Grid2>
    <Grid2 container direction={"column"} pt={"4rem"} flexGrow={1}>
      <ContactCard2 email={contactInfo[0].link}/>
      <ContactIcons contactInfo={contactInfo}/>
    </Grid2>
  )
}

export default ContactSection