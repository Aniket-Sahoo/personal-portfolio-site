import { Grid2, Link, Box, Typography, useTheme } from "@mui/material";
import clarity from '@microsoft/clarity';

const ContactCard2 = ({ email }) => {
  const theme = useTheme();

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
    clarity.event(`Contact_Card_Click: ${email}`);
  };


  return (
    <Grid2 container bgcolor={"background.board"} justifyItems={"center"} alignItems={"center"} justifyContent={"center"} py={3} borderRadius={2}>
      <Link 
        component="button"
        onClick={handleClick}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="h3" fontSize={{xs: "1.5rem", sm: "2rem"}}  my={{xs: 2, md: 2.5}}>
          Keep in {" "}
          <Box
            component="span"
            sx={{
              background: theme.palette.gradientBackground.primary, // Define your gradient colors here
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            touch {" "}
          </Box> 
          ✉️
        </Typography>
      </Link>
    </Grid2>
  );
};

export default ContactCard2;
