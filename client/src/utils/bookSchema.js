import * as yup from "yup";

export const bookSchema = yup.object().shape({
  name: yup
    .string()
    .min(1 < "book name must be at least 1 char")
    .required("book name is missing"),
  author: yup.string().min(1).required("Author is missing"),
  release: yup
    .string()
    .min(2, "Release year at least 2 char")
    .max(4, "Release year at most 4 char")
    .required("Release year is missing"),
  price: yup
    .number()
    .positive()
    .typeError("Price must be number")
    .required("price is missing"),
  img: yup.string().required(),
});
