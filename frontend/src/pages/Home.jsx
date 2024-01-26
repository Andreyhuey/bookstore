import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, BooksCard, BooksTable } from "../components";
import { Link } from "react-router-dom";
// icons
import { MdOutlineAddBox } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-sooty-five.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="bg-slate-800 text-white min-h-screen p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 transition duration-500 ease-in-out hover:scale-125 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 transition duration-500 ease-in-out hover:scale-125 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <div className="flex items-center gap-4">
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
          <Link to="/books/search">
            <FaSearchengin className="text-slate-400 text-4xl" />
          </Link>
        </div>
      </div>

      {showType == "table" && <BooksTable books={books} />}

      {showType == "card" && <BooksCard books={books} />}
    </div>
  );
};

export default Home;
