import { prisma } from "../prismaClient.js";

export const createBook = async (req, res) => {
  try {
    const { name, author, release, price, img } = req.body;
    console.log(name, author, release, price, img);

    if (!name || !author || !release || !price || !img) {
      return res.status(400).json({ message: "Incomplete Data", isErr: true });
    }

    const uniqueName = await prisma.books.findUnique({
      where: { name },
    });

    if (uniqueName) {
      return res
        .status(400)
        .json({ message: "Book Name is already exist!", isErr: true });
    }

    await prisma.books.create({
      data: {
        name,
        author,
        price: parseFloat(price),
        release,
        img,
      },
    });
    return res
      .status(200)
      .json({ message: "Book Created successful!", isErr: false });
  } catch (error) {
    console.log("error is ", error);
    return res
      .status(500)
      .json({ message: "Internal Server error", isErr: true });
  }
};

export const getBook = async (req, res) => {
  try {
    const allBook = await prisma.books.findMany();

    return res
      .status(200)
      .json({ message: "Fetch Book successful", isErr: false, books: allBook });
  } catch (error) {
    console.log("error is ", error);
    return res
      .status(500)
      .json({ error: "Internal server error", isErr: true });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "Id is required!", isErr: true });
    }
    const book = await prisma.books.findUnique({
      where: { id },
    });

    if (!book) {
      return res.status(404).json({ message: "Book Not Found", isErr: true });
    }

    return res
      .status(200)
      .json({ message: "Fetch Book successful", isErr: false, books: book });
  } catch (error) {
    console.log("error is ", error);
    return res
      .status(500)
      .json({ error: "Internal server error", isErr: true });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "ID is missing!", isErr: true });
    }

    const bookById = await prisma.books.delete({
      where: { id },
    });

    if (!bookById) {
      return res.status(404).json({ message: "Book Not Found!", isErr: true });
    }

    return res.status(200).json({
      message: "Book Deleted successful!",
      isErr: false,
      book: bookById,
    });
  } catch (error) {
    console.log("error is", error);
    return res
      .status(500)
      .json({ message: "Internal Server error", isErr: true });
  }
};

export const updateBook = async (req, res) => {
  console.log("Received request body:", req.body);
  try {
    const { id, name, author, release, price, img } = req.body;

    if (!id || !name || !author || !release || !price || !img) {
      return res.status(400).json({ message: "Incomplete Data", isErr: true });
    }

    const bookById = await prisma.books.findUnique({
      where: { id },
    });

    if (!bookById) {
      return res.status(404).json({ message: "Book Not Found!", isErr: true });
    }

    await prisma.books.update({
      where: { id },
      data: {
        name,
        author,
        release,
        price: parseFloat(price),
        img,
      },
    });

    return res
      .status(200)
      .json({ message: "Book Updated successful", isErr: false });
  } catch (error) {
    console.log("error is ", error);
    return res
      .status(500)
      .json({ message: "Internal Server error", isErr: true });
  }
};
