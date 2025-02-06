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
