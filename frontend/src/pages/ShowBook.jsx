import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner, BackButton } from "../components";
import moment from "moment";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-sooty-five.vercel.app/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="p-4 bg-slate-800 text-white min-h-screen">
      <BackButton />
      <h1 className="text-3xl my-4">Book Details</h1>

      <div className="flex items-center justify-center">
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 gap-6">
          <div>
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{moment(book.createdAt).format("Do MMM YYYY, h:mm a")}</span>
          </div>
          <div>
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{moment(book.updatedAt).format("Do MMM YYYY, h:mm a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
