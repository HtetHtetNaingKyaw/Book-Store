import { useMutation, useQuery } from "@tanstack/react-query";
import {
  bookUpload,
  deleteBookById,
  getBooks,
  singleBookById,
  updateBook,
} from "../apis/bookUpload.js";

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

export const useGetSingleBook = (id) => {
  return useQuery({
    queryKey: ["get-single-book-Byid"],
    queryFn: () => {
      return singleBookById(id);
    },
  });
};

export const useGetDeleteBook = () => {
  return useMutation({
    mutationFn: ({ id }) => deleteBookById(id),
  });
};

export const useUpdateBoook = () => {
  return useMutation({
    mutationFn: ({ id, name, author, release, price, img }) => {
      return updateBook(id, name, author, release, price, img);
    },
  });
};
