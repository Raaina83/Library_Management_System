// Import necessary modules
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const IndividualBook = () => {
  const { id } = useParams();
  console.log(id);

  const [book, setBook] = useState(null);

  const sendRequest = async() => {
    const toastId = toast.loading("Sending request...");

    try {
      const {data} = await axios.post('http://localhost:8080/api/v1/user/request', {bookId: id}, {
        withCredentials: true
    });
    console.log("indbook",data);
    toast.success(data.message, {
      id: toastId
    });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong", {
        id: toastId
      })
    }
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      const {data} = await axios.get(`http://localhost:8080/api/v1/user/books/${id}`, {
        withCredentials: true
      });
    //   const data = await response.json();
    //   console.log(data.book);
      setBook(data.book);
    };

    fetchBookDetails();
  }, [id]);

  // Handle loading state
  if (!book) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  }

  return (
    // <div className="flex flex-col items-center w-screen px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg w-[90%] flex flex-col md:flex-row gap-8 p-6 sm:w-[70%] lg:w-[1100px] lg:h-[25]">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.name}
          className="rounded-lg w-full md:w-[40%] object-cover max-h-96"
        />

        {/* Book Details */}
        <div className="flex flex-col flex-grow relative">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-2 text-lg">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-600 mb-4 text-lg">
            <span className="font-semibold">Available Books:</span> {book.available}
          </p>

          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold">Description:</span> {book.description || "No description available."}
          </p>

          {/* Genre and Rating */}
          {/* <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Genre:</span> {book.genre || "N/A"}
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-gray-500 text-sm">({book.rating || 0})</span>
            </div>
          </div> */}

          {/* Action Button */}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 shadow-md self-start absolute bottom-0"
            onClick={sendRequest}
          >
            Issue Book
          </button>
        </div>
      </div>
// </div>

  );
};

export default IndividualBook;
