import React from "react";
import { Grid } from "@mui/material";
// import { Box, CircularProgress } from "@mui/material";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import NavBar from "./NavBar";
import AddMem from "./AddMem";
import Loading from "./Loading";

const MainLayout = (props) => {
  return (
    <div className="h-full relative">
      <NavBar />
      <Grid container>
        <Grid item xs={2} md={2} lg={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={10} md={10} lg={8}>
          {props.content}
          <AddMem />
        </Grid>
        <Grid item xs={0} md={0} lg={2}>
          <RightBar />
        </Grid>
      </Grid>
      <Loading />
    </div>
  );
};

export default MainLayout;
