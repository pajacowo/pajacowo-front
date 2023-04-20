import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UPLOAD_URL } from './consts';

const uploadFile = async (data) => {
    await axios.post(UPLOAD_URL, data);
}

export const useUploadFile = () => {
    const { mutate } = useMutation((file) => uploadFile(file));
    return mutate;
}