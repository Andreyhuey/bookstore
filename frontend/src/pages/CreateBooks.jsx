import React, { useState } from "react";
import { Spinner, BackButton } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // save function
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://bookstore-sooty-five.vercel.app/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check Console");
        console.log(error);
      });
  };

  if (loading) return <Spinner />;

  return (
    <div className="bg-slate-800 h-screen text-white p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>

      <div className="flex items-center justify-center">
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[500px] gap-4 p-2">
          <div>
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md bg-slate-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md bg-slate-500 focus:outline-none "
            />
          </div>

          <div>
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md bg-slate-500 focus:outline-none"
            />
          </div>
          <button
            className="m-10 p-2 bg-sky-300 font-bold rounded-xl"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
