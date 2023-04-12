import React, { useState } from "react";
import axios from "axios";
import { TextField, Typography, Button, Box } from "@mui/material";
import { addMem } from "../../database/dbManager";

const FileUpload = (props) => {
  const MEMS_URL = "http://localhost:3001/upload";

  const { reload: reloadMems, close: closePopup } = props;

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const closeWindow = () => {
    closePopup();
  };

  const saveTitle = (e) => {
    setTitle(e.target.value);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    try {
      await axios.post(MEMS_URL, formData);

      await addMem(title, fileName);
      reloadMems();
      closePopup();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <Typography variant="h4" className="pb-4 pt-6 text-center">
        Dodaj mema
      </Typography>
      <TextField
        id="standard-basic"
        label="Tytuł mema"
        variant="standard"
        className="w-full mb-8"
        value={title}
        onChange={saveTitle}
      />
      <Box className="flex items-baseline justify-between">
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          disabled
          className="mb-6 w-64 text-black"
          value={fileName}
        />
        <Button variant="contained" component="label">
          Wybierz plik
          <input type="file" hidden onChange={saveFile} />
        </Button>
      </Box>
      <Box className="flex justify-center mt-10">
        <Button
          onClick={uploadFile}
          variant="outlined"
          className="mx-3"
          disabled={!(file && title)}
        >
          Zapisz
        </Button>
        <Button onClick={closeWindow} variant="outlined" className="mx-3">
          Anuluj
        </Button>
      </Box>
    </div>
  );
};

export default FileUpload;
