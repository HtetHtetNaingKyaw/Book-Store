import { useMutation, useQuery } from "@tanstack/react-query";
import { bookUpload, getBooks } from "../apis/bookUpload.js";

// for other request
export const useBookCreate = () => {
  return useMutation({
    mutationFn: ({ name, author, release, price, img }) =>
      bookUpload(name, author, release, price, img),
  });
};

// for get request using useQueries
export const useGetBooks = () => {
  return useQuery({
    queryKey: ["get-books-from-db"],
    queryFn: () => getBooks(),
  });
};
