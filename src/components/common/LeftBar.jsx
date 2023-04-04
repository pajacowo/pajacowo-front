import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faImage } from "@fortawesome/free-solid-svg-icons";

const LeftBar = () => {
   return (
      <Container className="pt-28 h-screen sticky top-0">
         <div className="flex items-center mb-10 pl-5">
            <FontAwesomeIcon
               icon={faFireFlameCurved}
               className="mr-5 text-lg"
            />
            <NavLink
               to="/hot"
               className={({ isActive }) =>
                  isActive ? "underline underline-offset-8" : ""
               }
               activeClassName="text-red-400"
            >
               <Typography>Hot mems</Typography>
            </NavLink>
         </div>
         <div className="flex items-center mb-10 pl-5">
            <FontAwesomeIcon icon={faImage} className="mr-5 text-lg" />
            <NavLink
               to="/regular"
               className={({ isActive }) =>
                  isActive ? "underline underline-offset-8" : ""
               }
            >
               <Typography>Regular</Typography>
            </NavLink>
         </div>
      </Container>
   );
};

export default LeftBar;
