import { useMutation } from "@tanstack/react-query";
import { queryClient } from '../react-query/queryClient';
import { queryKeys } from '../react-query/consts';
//import { MEMS_URL } from './consts';
import { useToast } from "./useToast";

const addMem = async ({ title, fileName }) => {
    const mem = {
        title,
        "description": "",
        "upvotes": 0,
        "downvotes": 0,
        "img": `../img/mems/${fileName}`
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mem)
    };

    await fetch(`${process.env.REACT_APP_MEMS_URL}`, requestOptions);
}

export const useAddMem = () => {
    const toast = useToast();
    const { mutate } = useMutation((mem) => addMem(mem), {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.mems]);
            const errorMessage = { text: "Mem został dodany do sekcji REGULAR.", type: "success" };
            toast(errorMessage);
        },
        onError: () => {
            const errorMessage = { text: "Connection error.", type: 'error' };
            toast(errorMessage);
        },
    });
    return mutate;
}