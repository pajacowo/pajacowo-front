import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
   return (
      <AppBar className="bg-white" position="fixed">
         <Toolbar>
            <FontAwesomeIcon
               icon={faMasksTheater}
               className="text-black mr-5"
               size="2x"
            />
            <Typography className="text-gray-900">Memownia</Typography>
         </Toolbar>
      </AppBar>
   );
};

export default NavBar;
