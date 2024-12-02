// import React from 'react'

import Home from "./Home";

const BooksDisplay = () => {
    const books = [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 3,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 4,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 5,
          title: "1984",
          author: "George Orwell",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: 6,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          coverImage: "https://m.media-amazon.com/images/I/914CT7iyyvL._AC_UF1000,1000_QL80_.jpg",
        },
        // Add more books here
      ];
  return (
    <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                    <p className="text-gray-700">by {book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Home()(BooksDisplay);