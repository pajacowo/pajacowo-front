import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";

// import '../../font.css';

const NavBar = () => {
   return (
      <AppBar  position="fixed" className="py-3 bg-dark-blue">
         <Toolbar>
            <FontAwesomeIcon
               icon={faMasksTheater}
               className="text-white mr-5"
               size="2x"
            />
            <Typography className="text-white font-sedgwick-ave text-3xl" >Memownia</Typography>
         </Toolbar>
      </AppBar>
   );
};

export default NavBar;
