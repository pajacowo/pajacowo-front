import { Container } from "@mui/system";
import React from "react";

import Mem from "./Mem";

const MemList = (props) => {
   const filteredList = props.mems.filter((mem) => {
      return (
         (props.hot && mem.upvotes - mem.downvotes > 5) ||
         (!props.hot && mem.upvotes - mem.downvotes <= 5)
      );
   });

   const mems = filteredList.map((mem) => (
      <Mem
         key={mem.id}
         mem={mem}
         onUpClick={props.onUpClick}
         onDownClick={props.onDownClick}
      />
   ));

   return (
      <Container className="pt-28 flex flex-wrap justify-center bg-gray-100">
         {mems.length > 0 ? mems : <p>brak</p>}
      </Container>
   );
};

export default MemList;
