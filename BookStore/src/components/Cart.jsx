import React from "react";

const Cart = ({ cart, setCart }) => {
  // Function to remove a book from cart
  const handleRemove = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Basket is Empty</h2>
          <p className="text-gray-600">Add some books to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Basket ({cart.length} items)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((book) => {
            const info = book.volumeInfo;
            return (
              <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
                {info.imageLinks && (
                  <img
                    src={info.imageLinks.thumbnail}
                    alt={info.title}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                )}
                
                <h3 className="font-bold text-lg mb-2">{info.title || "No Title"}</h3>
                <p className="text-sm italic text-gray-600 mb-2">
                  {info.authors ? info.authors.join(", ") : "Unknown Author"}
                </p>
                
                <button
                  onClick={() => handleRemove(book.id)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Remove from Basket
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;