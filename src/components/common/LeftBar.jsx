import React from "react";
import { Link } from "react-router-dom";
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
            <Link
               to="/hot"
               className="focus:underline focus:underline-offset-8"
            >
               <Typography>Hot mems</Typography>
            </Link>
         </div>
         <div className="flex items-center mb-10 pl-5">
            <FontAwesomeIcon icon={faImage} className="mr-5 text-lg" />
            <Link
               to="/regular"
               className="focus:underline focus:underline-offset-8"
            >
               <Typography>Regular</Typography>
            </Link>
         </div>
      </Container>
   );
};

export default LeftBar;
