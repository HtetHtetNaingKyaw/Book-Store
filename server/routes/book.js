import { Router } from "express";
import { createBook } from "../controllers/book.js";

export const bookRoute  =Router()

bookRoute.post("/create-book",createBook)