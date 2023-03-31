import { Container } from "@mui/system";
import React from "react";

import Mem from './Mem';

const RegularMems = () => {
   return <Container className="pt-20">
    <Mem/>
    <Mem/>
    <Mem/>
   </Container>;
};

export default RegularMems;
