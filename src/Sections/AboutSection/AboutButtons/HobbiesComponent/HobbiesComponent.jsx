import { Grid2, Link, Box } from "@mui/material";
import { useState } from "react";
import hobbies from '../../../../data/hobbies.json';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HobbiesIcon from './HobbiesIcon';

const HobbiesComponent = () => {
  return (
    <Grid2 container pb={9} justifyContent={"center"}>
      <Grid2 
        container
        py={3} px={{xs: 2, sm: 3, md: 5}} 
        bgcolor={"#333333"} borderRadius={3}
        alignContent={"center"} alignItems={"center"}
        spacing={{xs: 1.5, sm: 3, md: 5}} 
      >
        {
          hobbies.map((hobby, index) => {
            return <HobbiesIcon key={index} hobby={hobby} />;
          })
        }
      </Grid2>
    </Grid2>
  );
}

export default HobbiesComponent