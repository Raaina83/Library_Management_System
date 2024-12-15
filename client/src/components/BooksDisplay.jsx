import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BooksDisplay = ({search}) => {
  const [books, setBooks] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  console.log(searchQuery);

  useEffect(() => {
    async function getBooks() {
      try {
        const {data} = await axios.get(`http://localhost:8080/api/v1/user/books?search=${searchQuery}`, 
          {withCredentials: true}
        );
        console.log("data after re-render", data);
        setBooks(data.books);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks() 
  }, [searchQuery])

    // const books = [
    //     {
    //       id: 1,
    //       title: "The Great Gatsby",
    //       author: "F. Scott Fitzgerald",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //       id: 2,
    //       title: "1984",
    //       author: "George Orwell",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //       id: 3,
    //       title: "To Kill a Mockingbird",
    //       author: "Harper Lee",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //       id: 4,
    //       title: "The Great Gatsby",
    //       author: "F. Scott Fitzgerald",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //       id: 5,
    //       title: "1984",
    //       author: "George Orwell",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //       id: 6,
    //       title: "To Kill a Mockingbird",
    //       author: "Harper Lee",
    //       coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
    //     },
    //     // Add more books here
    //   ];
  return (
    <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
              {books?.map((book) => (
                <Link key={book._id} to={`/book/${book._id}`}>
                  <div
                  // key={book._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[23rem]"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-[18rem] w-full object-cover"
                  />
                  <div className="pl-4">
                    <h2 className="text-lg font-bold mt-1">{book.title}</h2>
                    <p className="text-gray-700 text-sm">by {book.author}</p>
                  </div>
                </div>
                 </Link>
              ))}
            </div>
          </div>
  )
}

export default (BooksDisplay);