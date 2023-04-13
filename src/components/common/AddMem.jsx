import React, { useState } from "react";

import { Alert, Container, Fab, Snackbar } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

import FileUpload from "./FileUpload";

const AddMem = (props) => {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  let vertical = "bottom",
    horizontal = "center";

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
          <FileUpload
            reload={props.reload}
            close={handleClose}
            openAlert={handleOpenAlert}
          />
        </Container>
      </Modal>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseAlert}
      >
        <Alert
          severity="success"
          onClose={handleCloseAlert}
          className="mt-20 bg-light-green w-96"
        >
          Mem został dodany do sekcji REGULAR
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddMem;
