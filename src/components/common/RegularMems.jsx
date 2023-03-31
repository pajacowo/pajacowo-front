import { Container } from "@mui/system";
import React from "react";

import Mem from "./Mem";

const RegularMems = (props) => {
   const mems = props.mems.map((mem) => <Mem mem={mem} />);

   return (
      <Container className="pt-20 flex flex-wrap justify-center">
         {mems}
      </Container>
   );
};

export default RegularMems;
