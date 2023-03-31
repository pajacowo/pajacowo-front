import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from "@mui/material";
import React from "react";

const Mem = (props) => {
   console.log("title", props.mem);

   const { title, upvotes, downvotes, img } = props.mem;

   return (
      <Card className="mb-6" sx={{ maxWidth: 600 }}>
         <CardContent>
            <Typography
               gutterBottom
               variant="h5"
               component="div"
               className="text-center"
            >
               {title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
            </Typography> */}
         </CardContent>
         <CardMedia
            component="img"
            image={img}
            alt={title}
            height="140"
            className="p-3"
         />

         <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
};

export default Mem;
