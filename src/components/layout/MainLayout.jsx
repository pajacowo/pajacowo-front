import React from "react";
import { Grid } from "@mui/material";
import LeftBar from "../common/LeftBar";
import RightBar from "../common/RightBar";
import NavBar from "../common/NavBar";
import AddMem from "../common/AddMem";

const MainLayout = (props) => {
  return (
    <div className="h-full">
      <NavBar />
      <Grid container>
        <Grid item xs={1} md={2} lg={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={11} md={10} lg={8}>
          {props.content}
          <AddMem reload={props.reload} />
        </Grid>
        <Grid item xs={0} md={0} lg={2}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainLayout;
