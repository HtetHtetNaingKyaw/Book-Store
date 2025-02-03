import { useMutation } from "@tanstack/react-query";
import { bookUpload } from "../apis/bookUpload";

export const useBookCreate = () => {
  return useMutation({
    mutationFn: ({ name, author, release, price, img }) =>
      bookUpload(name, author, release, price, img),
  });
};
