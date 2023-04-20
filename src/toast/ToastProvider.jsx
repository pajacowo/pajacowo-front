import React, { useState, useCallback } from "react";
import { ToastContext } from "./ToastContext";
import { Alert, Snackbar } from "@mui/material";
import { AUTO_HIDE_DURATION } from "./consts";

const ToastProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({});
  const { text, type } = message;

  const handleClose = () => {
    setIsOpen(false);
  };

  const contextValue = useCallback((message) => {
    setMessage(message);
    setIsOpen(true);
  }, []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}
      <Snackbar
        open={isOpen}
        autoHideDuration={type === "success" ? AUTO_HIDE_DURATION : undefined}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert
          severity={type}
          onClose={handleClose}
          className={`mt-20 w-96 ${
            type === "success" ? "bg-light-green" : "bg-red-200"
          }`}
        >
          {text}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
