import React, { useState } from "react";

import { Container, Fab } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

import FileUpload from "./FileUpload";

const AddMem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        className="fixed right-5 bottom-5 bg-light-green"
        aria-label="add"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center h-screen"
      >
        <Container className="h-full md:h-80 md:w-2/5 bg-white md:rounded-md">
          <FileUpload reload={props.reload} close={handleClose} />
        </Container>
      </Modal>
    </>
  );
};

export default AddMem;
