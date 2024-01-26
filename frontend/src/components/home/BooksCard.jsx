import React from "react";
import Card from "../Card";

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book, index) => (
        <Card book={book} />
      ))}
    </div>
  );
};

export default BooksCard;
