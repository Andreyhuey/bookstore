import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CreateBooks,
  DeleteBook,
  EditBook,
  Home,
  ShowBook,
  FindBook,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/search" element={<FindBook />} />
    </Routes>
  );
};

export default App;
