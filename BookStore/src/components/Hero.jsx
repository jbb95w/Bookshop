import React, { useState } from "react";
import BookList from "./BookList";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}`
      );
      const data = await response.json();

      if (data.items) {
        setBooks(data.items);
      } else {
        setError("No books found.");
      }
    } catch (err) {
      setError("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
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
            <input
              type="text"
              placeholder="The Lost World..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-64 text-black bg-white rounded-l-md border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200 transition duration-200 active:scale-95">
              Search
            </button>
          </form>
        </div>
      </section>

      <BookList books={books} loading={loading} error={error} />
    </>
  );
};

export default Hero;
