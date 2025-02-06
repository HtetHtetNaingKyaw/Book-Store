import { Router } from "express";
import { createBook, getBook } from "../controllers/book.js";

export const bookRoute = Router();

bookRoute.post("/create-book", createBook);
bookRoute.get("/books", getBook);
