import React from "react";
import { CircularProgress } from "@mui/material";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const classes = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
    isFetching || isMutating || "hidden"
  }`;

  return <CircularProgress className={classes} />;
};

export default Loading;
