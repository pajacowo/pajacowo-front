import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faImage } from "@fortawesome/free-solid-svg-icons";

const LeftBar = () => {
   return (
      <Container className="pt-24 h-screen sticky top-0">
         <div className="flex items-center mb-10">
            <FontAwesomeIcon
               icon={faFireFlameCurved}
               className="mr-5 text-lg"
            />
            <Link to="/hot">
               <Typography>Hot mems</Typography>
            </Link>
         </div>
         <div className="flex items-center mb-10">
            <FontAwesomeIcon icon={faImage} className="mr-5 text-lg" />
            <Link to="/regular">
               <Typography>Regular</Typography>
            </Link>
         </div>
      </Container>
   );
};

export default LeftBar;
