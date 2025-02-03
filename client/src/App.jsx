import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
// import BookForm from "./components/BookForm";
import HomeLayout from "./layout/HomeLayout";
import CreateBook from "./pages/CreateBook";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="create-Book" element={<CreateBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
