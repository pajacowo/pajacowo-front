import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { MEMS_URL } from "./consts";
import { queryKeys } from "../react-query/consts";
import { filterMems } from "./utils";
import { useToast } from "./useToast";

async function getMems() {
  //const data = await fetch(MEMS_URL);

  const db = [
    {
      id: 1,
      title: "Kiedy zbliża się Wielkanoc",
      upvotes: 14,
      downvotes: 7,
      img: "../img/mems/mem-1.jpg",
    },
    {
      id: 2,
      title: "Oczekiwania a rzeczywistość",
      upvotes: 9,
      downvotes: 4,
      img: "../img/mems/mem-2.jpg",
    },
    {
      id: 3,
      title: "Architektura IT",
      upvotes: 16,
      downvotes: 5,
      img: "../img/mems/mem-3.png",
    },
    {
      id: 4,
      title: "Gdy nieubłaganie zbliża się deadline",
      upvotes: 7,
      downvotes: 6,
      img: "../img/mems/mem-4.jpg",
    },
    {
      title: "Junior vs Senior",
      upvotes: 3,
      downvotes: 1,
      img: "../img/mems/maxresdefault.jpg",
      id: 5,
    },
  ];

  const data = new Promise(function (myResolve, myReject) {
    myResolve(db);
  });

  //return data.json();
  return data;
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
