import React from "react";
import { Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LeftBar from "../common/LeftBar";
import RightBar from "../common/RightBar";
import NavBar from "../common/NavBar";

const MainLayout = (props) => {
   return (
      <div>
         <NavBar />
         <Grid container>
            <Grid item xs={2} className="bg-gray-100">
               <LeftBar />
            </Grid>
            <Grid item xs={8}>
               {props.content}
               <Fab className="fixed right-5 bottom-5 bg-yellow-400" aria-label="add">
                  <AddIcon />
               </Fab>
            </Grid>
            <Grid item xs={2} className="bg-gray-100">
               <RightBar />
            </Grid>
         </Grid>
      </div>
   );
};

export default MainLayout;
