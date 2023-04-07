import React, { useState } from "react";

import { Container, Fab, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

const AddMem = () => {
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
        className="fixed right-5 bottom-5 bg-yellow-400"
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
        <Container className="h-96 w-96 bg-white">
          <form className="py-5 px-3" autoComplete="off">
            <label for="myfile">Select a file:</label>
            <input type="file" id="myfile" name="myfile" />
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default AddMem;
