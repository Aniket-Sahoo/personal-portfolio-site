import { Grid2, Link, Box } from "@mui/material";

const ContactCard2 = ({ email }) => {
  return (
    <Grid2 container bgcolor={"#171717"} justifyContent={"center"} py={3} borderRadius={2}>
      <Link href={`mailto:${email}`} sx={{ textDecoration: "none", color: "inherit" }}>
        <Box component={"h1"}>
          Keep in 
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(90deg, #FF5733, #FFC300)', // Define your gradient colors here
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {" "}touch
          </Box> 
          ✉️
        </Box>
      </Link>
    </Grid2>
  );
};

export default ContactCard2;
