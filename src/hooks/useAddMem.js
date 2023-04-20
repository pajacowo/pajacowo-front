import { useMutation } from "@tanstack/react-query";
import { queryClient } from '../react-query/queryClient';
import { queryKeys } from '../react-query/consts';
import { MEMS_URL } from './consts';
import { useToast } from "./useToast";

const addMem = async ({ title, fileName }) => {
    const mem = {
        title,
        "upvotes": 0,
        "downvotes": 0,
        "img": `../img/mems/${fileName}`
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mem)
    };

    await fetch(`${MEMS_URL}`, requestOptions);
    console.log('useAddMem ', mem);
}

export const useAddMem = () => {
    const toast = useToast();
    const { mutate } = useMutation((mem) => addMem(mem), {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.mems]);
        },
        onError: () => {
            const errorMessage = { text: "Connection error.", type: 'error' };
            toast(errorMessage);
        },
    });
    return mutate;
}