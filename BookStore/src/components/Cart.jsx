import React from "react";

const Cart = ({ cart, onRemoveFromCart, onCheckout }) => {

  const safeCart = cart || [];
  
  const totalPrice = safeCart
    .reduce((acc, book) => acc + parseFloat(book.price), 0)
    .toFixed(2);

  if (safeCart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-600">
        <h2 className="text-2xl font-bold mb-3">Your Cart is Empty</h2>
        <p>Search and add some books to your cart first!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-stone-800">Your Cart</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safeCart.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-200"
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
              alt={book.volumeInfo.title}
              className="w-32 h-48 object-cover mb-3 rounded"
            />
            <h3 className="font-semibold text-lg text-center">
              {book.volumeInfo.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
            <p className="text-yellow-600 font-bold mb-3">${book.price}</p>

            <button
              onClick={() => onRemoveFromCart(book.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="text-center mt-8">
        <p className="text-xl font-semibold mb-4">Total: ${totalPrice}</p>
        <button
          onClick={onCheckout}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;