import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UPLOAD_URL } from './consts';
import { useToast } from "./useToast";

const uploadFile = async (data) => {
    await axios.post(UPLOAD_URL, data);
}

export const useUploadFile = () => {
    const toast = useToast();
    const { mutate } = useMutation((file) => uploadFile(file), {
        onError: () => {
            const errorMessage = { text: "Connection error.", type: 'error' };
            toast(errorMessage);
        },
    });
    return mutate;
}