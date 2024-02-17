import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { queryKeys } from "../react-query/consts";
import { filterMems } from "./utils";
import { useToast } from "./useToast";

async function getMems() {
  const data = await fetch(process.env.REACT_APP_MEMS_URL);
  return data.json();
}

export const useMems = (type) => {
  const fallback = [];
  const selectFn = useCallback((data) => filterMems(data, type), [type]);
  const toast = useToast();

  const handleError = () => {
    const errorMessage = { text: "Connection error.", type: "error" };
    toast(errorMessage);
  };

  const { data = fallback } = useQuery([queryKeys.mems], getMems, {
    select: selectFn,
    onError: handleError,
  });
  return data;
};
