import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faImage } from "@fortawesome/free-solid-svg-icons";

const LeftBar = () => {
  return (
    <Container className="pt-28 h-screen sticky top-0 bg-black md:bg-gray-100">
      <div className="flex items-center justify-center mb-10 md:justify-start md:pl-5">
        <NavLink
          to="/hot"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 flex border-b-2 md:border-0 pb-1"
              : "flex pb-1"
          }
        >
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            className="md:mr-5 text-lg text-white md:text-black"
          />
          <Typography className="hidden font-prompt md:block">Hot</Typography>
        </NavLink>
      </div>
      <div className="flex items-center justify-center md:justify-start mb-10 md:pl-5">
        <NavLink
          to="/regular"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 flex border-b-2 md:border-0 pb-1"
              : "flex pb-1"
          }
        >
          <FontAwesomeIcon
            icon={faImage}
            className="md:mr-5 text-lg text-white md:text-black"
          />
          <Typography className="hidden font-prompt md:block">
            Regular
          </Typography>
        </NavLink>
      </div>
    </Container>
  );
};

export default LeftBar;
