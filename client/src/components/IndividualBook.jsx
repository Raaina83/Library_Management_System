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
    console.log(data);
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
    <div className="flex flex-col items-center h-full w-full p-10">
      <div className="rounded-lg flex h-full w-[80%] gap-8">
        <img
          src={book.image}
          alt={book.name}
          className="rounded-lg h-[26rem] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-2 text-xl">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-600 mb-4 text-xl">
            <span className="font-semibold">Available Books:</span> {book.available}
          </p>

          <div>
            <button className='bg-blue-400 px-4 py-2 rounded-md hover:shadow-md' onClick={sendRequest}>Issue Book</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndividualBook;
