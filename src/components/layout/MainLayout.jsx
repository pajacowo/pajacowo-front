import React from "react";
import { Grid, Fab, Container, Typography, BottomNavigation } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LeftBar from "../common/LeftBar";
import RightBar from "../common/RightBar";
import NavBar from "../common/NavBar";

const MainLayout = (props) => {
   return (
      <div>
         <NavBar />
         <Grid container>
            <Grid item xs={2} className="bg-gray-300">
               <LeftBar />
            </Grid>
            <Grid item xs={8}>
               {props.content}
               <Fab className="bg-gray-300 fixed right-5 bottom-5" aria-label="add">
                  <AddIcon />
               </Fab>
            </Grid>
            <Grid item xs={2}  className="bg-gray-50">
               <RightBar />
            </Grid>
         </Grid>

         {/* <BottomNavigation className="flex place-content-start">
            <div className="">
               <div>01</div>
               <div>02</div>
            </div>
         </BottomNavigation> */}
      </div>
   );
};

export default MainLayout;
