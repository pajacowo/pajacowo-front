import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../react-query/consts";
import { queryClient } from "../react-query/queryClient";

async function updateMem(mem) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mem),
  };

  await fetch(`${process.env.REACT_APP_MEMS_URL}/${mem.id}`, requestOptions);
}

export const useModifyMemVote = () => {
  const { mutate } = useMutation((mem) => updateMem(mem), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.mems]);
    },
  });
  return mutate;
};
