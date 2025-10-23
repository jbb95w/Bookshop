import React, { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");
  // hold the api return.
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = [
    { id: 1, title: "The Lost World" },
    { id: 2, title: "Harry Potter" },
    { id: 3, title: "Percy Jackson" },
    { id: 4, title: "The Hobbit" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(results);
  };

  return (
    <section className="relative bg-cover bg-center h-screen bg-[url('./assets/bp.jpg')] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white p-10 rounded-xl backdrop-blur-md bg-white/10">
        <h2 className="text-3xl font-extrabold mb-4">Find Your Book Of Choice.</h2>

        <p className="mb-6 text-base">
          Every book has a world waiting to be discovered. <br />
          Whether you are chasing adventure, seeking knowledge, or escaping into imagination, <br />
          use the search bar below to find the perfect story that speaks to your heart.
        </p>

        <form onSubmit={handleSearch} className="flex justify-center mt-4">
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="The Lost World..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-64 text-black bg-white rounded-l-md border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200 transition duration-200 active:scale-95"
            >
              Search
            </button>
          </div>
        </form>
        <div className="mt-6 text-white">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <p key={book.id} className="mb-2 text-lg font-semibold">
                {book.title}
              </p>
            ))
          ) : (
            <p>No books found. Try searching something else!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;


