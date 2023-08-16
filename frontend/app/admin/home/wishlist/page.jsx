"use client"

import { useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [itemInput, setItemInput] = useState('');

  const addItem = () => {
    if (itemInput.trim() !== '') {
      setWishlist([...wishlist, itemInput]);
      setItemInput('');
    }
  };

  const removeItem = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      <div className="flex w-full mb-4">
        <input
          type="text"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
          className="flex-grow rounded-l py-2 px-4"
          placeholder="Add an item"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-4 py-2"
        >
          Add
        </button>
      </div>
      <ul className="w-full">
        {wishlist.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white rounded p-2 mb-2 shadow"
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
