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
