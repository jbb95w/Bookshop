import React, { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return; // stop if input is empty

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

        <div>
      {/* Loading and error messages */}
      {loading ? (
        <p style={{ color: "yellow" }}>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : null}
      </div>
      {/* Display books */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div
                key={book.id}
                className="bg-white/20 p-4 rounded-lg text-left text-white backdrop-blur-sm"
              >
                <h3 className="font-bold mb-2 text-lg">
                  {info.title || "No Title"}
                </h3>
                {info.imageLinks && (
                  <img
                    src={info.imageLinks.thumbnail}
                    alt={info.title}
                    className="w-24 h-auto mb-2 rounded"
                  />
                )}
                <p className="text-sm italic mb-1">
                  {info.authors ? info.authors.join(", ") : "Unknown Author"}
                </p>
                <p className="text-xs text-gray-300">
                  {info.description
                    ? info.description.slice(0, 100) + "..."
                    : "No description available."}
                </p>
              </div>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;


