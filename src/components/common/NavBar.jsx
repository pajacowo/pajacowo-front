import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
   return (
      <AppBar color="primary" position="fixed">
         <Toolbar>
            <FontAwesomeIcon
               icon={faMasksTheater}
               className="text-white mr-5"
               size="2x"
            />
            <Typography className="text-white">Memownia</Typography>
         </Toolbar>
      </AppBar>
   );
};

export default NavBar;
