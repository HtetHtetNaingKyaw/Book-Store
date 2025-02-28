import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBookById,
  updateBook,
} from "../controllers/book.js";

export const bookRoute = Router();

bookRoute.post("/create-book", createBook);
bookRoute.get("/books", getBook);
bookRoute.get("/get-book-detail/:id", getBookById);

bookRoute.delete("/delete-book/:id", deleteBook);

bookRoute.put("/update", updateBook);
