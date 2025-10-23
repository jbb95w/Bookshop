import React from "react";

const BookList = ({ books, loading, error }) => {
  if (loading) return <p className="text-yellow-500 text-center mt-6">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!books.length) return null;

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div
              key={book.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {info.imageLinks && (
                <img
                  src={info.imageLinks.thumbnail}
                  alt={info.title}
                  className="w-full h-60 object-cover rounded mb-3"
                />
              )}
              <h3 className="font-bold text-lg mb-1">
                {info.title || "No Title"}
              </h3>
              <p className="text-sm italic text-gray-600 mb-1">
                {info.authors ? info.authors.join(", ") : "Unknown Author"}
              </p>
              <p className="text-sm text-gray-700">
                {info.description
                  ? info.description.slice(0, 100) + "..."
                  : "No description available."}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookList;
