import React, { useState } from "react";

import { Alert, Container, Fab, Snackbar, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import FileUpload from "./FileUpload";

const AddMem = (props) => {
  const AUTO_HIDE_DURATION = 2000;

  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAlert = () => {
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Fab
        className="fixed right-5 bottom-5 bg-light-green hover:bg-light-blue"
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
          <FileUpload
            reload={props.reload}
            close={handleClose}
            openAlert={handleOpenAlert}
          />
        </Container>
      </Modal>
      <Snackbar
        open={alertOpen}
        autoHideDuration={AUTO_HIDE_DURATION}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleCloseAlert}
      >
        <Alert
          severity="success"
          onClose={handleCloseAlert}
          className="mt-20 bg-light-green w-96"
        >
          Mem został dodany do sekcji REGULAR.
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddMem;
