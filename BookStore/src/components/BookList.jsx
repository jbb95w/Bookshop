import React from "react";

const BookList = ({ books, loading, error }) => {
  if (loading)
    return <p className="text-yellow-500 text-center mt-6">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!books.length) return null;

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div
              key={book.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition"
            >
              {/* Book image */}
              {info.imageLinks && (
                <img
                  src={info.imageLinks.thumbnail}
                  alt={info.title}
                  className="w-full h-64 object-cover transition duration-300 group-hover:opacity-70"
                />
              )}

              {/* Hover details */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="font-semibold text-lg">{info.title || "No Title"}</h3>
                <p className="text-sm italic text-gray-200">
                  {info.authors ? info.authors.join(", ") : "Unknown Author"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookList;