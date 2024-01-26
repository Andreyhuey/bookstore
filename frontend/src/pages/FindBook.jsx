import React, { useState, useEffect } from "react";
import { Spinner, BackButton, Card } from "../components";
import axios from "axios";

const FindBook = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(
        `https://bookstore-sooty-five.vercel.app/books/search/${query.toLowerCase()}`
      )
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) return <Spinner />;

  return (
    <div className="bg-slate-800 min-h-screen text-white p-6">
      <BackButton />
      <h1 className="text-3xl my-4">Find Book</h1>
      <div className="flex flex-col gap-10">
        <form
          onSubmit={(e) => handleSearch()}
          className="flex items-center justify-center w-full h-full"
        >
          <input
            type="text"
            value={query}
            placeholder="Search with book Title or Author"
            onChange={(e) => setQuery(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-72 rounded-md bg-slate-500 focus:outline-none"
          />

          <button
            className="p-2 bg-sky-300 font-bold rounded-r-xl h-full"
            type="submit"
          >
            Search
          </button>
        </form>
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book, index) => (
              <Card book={book} key={index} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-24 flex flex-col items-center justify-center text-center">
            Oops!, No such books in database, Try again?
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBook;
