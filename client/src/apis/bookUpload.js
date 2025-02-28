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

export const singleBookById = async (id) => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/get-book-detail/" + id
    );
    const { books } = res.data;
    return books;
  } catch (error) {
    throw error;
  }
};

export const deleteBookById = async (id) => {
  console.log(id);
  try {
    const res = await axios.delete(
      "http://localhost:3000/api/delete-book/" + id
    );
    // const { book } = res.data;
    // console.log(book)
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (id, name, author, release, price, img) => {
  try {
    const res = await axios.put("http://localhost:3000/api/update", {
      id,
      name,
      author,
      release,
      price,
      img,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
