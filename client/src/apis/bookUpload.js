import axios from "axios";

export const bookUpload = async (name, author, release, price, img) => {
  try {
    const response = await axios.post("http://localhost:3000/api/create-book", {
      name,
      author,
      release,
      price,
      img,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/books");
    const { books } = res.data;
   
    return books;
  } catch (error) {
    throw error;
  }
};
