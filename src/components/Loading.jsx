import React from "react";
import { Container, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Container className="pt-28 flex flex-wrap justify-center">
      <Typography>Ładowanie danych ...</Typography>
    </Container>
  );
};

export default Loading;
