"use client";

import React, { useState } from "react";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import cart from "../../../../public/images/dashboard/cart.svg";
import plastic1 from "../../../../public/images/dashboard/bag.webp";
import plastic2 from "../../../../public/images/dashboard/plastic2.jpg";
import plastic3 from "../../../../public/images/dashboard/plastic3.jpg";
import cloth1 from "../../../../public/images/dashboard/cloths.webp";
import cloth2 from "../../../../public/images/dashboard/cloth2.jpg";
import cloth3 from "../../../../public/images/dashboard/cloth3.jpg";
import metal1 from "../../../../public/images/dashboard/metal1.jpg";
import metal2 from "../../../../public/images/dashboard/metal2.jpg";
import metal3 from "../../../../public/images/dashboard/metal3.webp";
import { useRouter } from "next/navigation";
import cross from "../../../../public/images/dashboard/cross.svg";
import trash from "../../../../public/images/dashboard/trash.svg";
import { Toaster, toast } from "react-hot-toast";

const ProductDetailsPage = () => {
  const router = useRouter();
  const options = [
    {
      header: "Metal",
      images: [metal1, metal2, metal3],
      description: "All Recyclable metals",
      price: 19.99,
    },
    {
      header: "Plastic",
      images: [plastic1, plastic2, plastic3],
      description: "Bio-degradable plastics",
      price: 9.99,
    },
    {
      header: "Cloths",
      images: [cloth1, cloth2, cloth3],
      description: "All cloth scrap",
      price: 29.99,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedImage, setSelectedImage] = useState(selectedOption.images[0]);
  const [cartItems, setCartItems] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedImage(option.images[0]);
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    const cartItem = {
      name: selectedOption.header,
      price: selectedOption.price,
      image: selectedImage.src,
      quantity: selectedQuantity,
    };

    setCartItems((prevCartItems) => [...prevCartItems, cartItem]);

    toast.success("Cart Items Added.", {
      style: {
        border: "2px solid rgba(255, 255, 255, 0.1)",
        padding: "16px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart Items Removed.", {
      style: {
        border: "2px solid rgba(255, 255, 255, 0.1)",
        padding: "16px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
  };

  const handleClick = () => {
    router.push("/admin/home");
  };

  const handleCheckout = () => {
    router.push("/admin/checkout");
  };

  return (
    <div className="h-screen panel">
      <div className="py-4 border-b-2 border-white/10 flex justify-between px-10">
        <button onClick={handleClick}>
          <Image src={left} alt="" className="w-12 h-12 my-auto" />
        </button>
        <h1 className="font-odesans-semibold text-5xl text-white">Recyclit</h1>
        <button onClick={() => setCartModalOpen(true)}>
          <Image src={cart} alt="" className="w-10 h-10 my-auto" />
        </button>
      </div>
      <div className="flex flex-col items-end">
        {cartModalOpen && (
          <div className="text-white backdrop-blur-sm absolute mr-5 mt-2 font-space-grostek">
            <div className="bg-white/10 border-2 border-white/10 p-6 rounded-lg">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg mt-auto">Cart Items</h2>
                <button
                  onClick={() => setCartModalOpen(false)}
                  className="mb-auto"
                >
                  <Image src={cross} alt="" className="w-6 h-6 my-auto" />
                </button>
              </div>
              <div className="h-32 overflow-y-scroll scroll">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Image
                      height={50}
                      width={50}
                      src={item.image}
                      alt={`Cart Item ${index}`}
                      className="w-12 h-12 mr-2 rounded-md"
                    />
                    <div>
                      <p className="text-lg">{item.name}</p>
                      <p className="text-gray-200 text-lg">
                        ${item.price.toFixed(2)} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {cartItems.length > 0 ? (
                <div className="flex justify-between mt-5">
                  <button
                    className="bg-white/10 border-2 border-white/10 text-white px-7 py-2 rounded-md"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className=""
                  >
                    <Image src={trash} alt="" className="w-7 h-7 my-auto" />
                  </button>
                </div>
              ) : (
                <p>Your Cart Is Empty</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between py-16 px-72 text-white font-space-grostek my-auto">
        {/* Options */}
        <div className="flex flex-col">
          {/* Product Details */}
          <Image
            height={700}
            width={700}
            src={selectedImage.src}
            alt="Selected Product"
            className=" mb-4 border border-gray-300 rounded-2xl h-[25rem] w-[40rem] object-cover"
          />
          {/* Thumbnails */}
          <div className="flex gap-3">
            {selectedOption.images.map((image, index) => (
              <Image
                height={100}
                width={100}
                key={index}
                src={image.src}
                alt={`Thumbnail ${index}`}
                className={`mb-2 cursor-pointer object-cover  ${
                  selectedImage === image
                    ? "border-2 border-white/90 rounded-2xl w-28 h-20"
                    : "border-2 border-white/20 rounded-2xl w-28 h-20"
                }`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 px-4">
          <h2 className="text-4xl font-odesans-semibold mb-2">
            {selectedOption.header}
          </h2>
          <p className="text-gray-600 mb-4">{selectedOption.description}</p>
          <div className="flex justify-left gap-2">
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer p-2 rounded-lg ${
                    selectedOption === option
                      ? "bg-white/20 border-white/50 border-2"
                      : "bg-white/10 border-white/10 border-2"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.header}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col mt-10 gap-5">
            <input
              type="number"
              className="w-20 px-2 py-2 border-2 border-white/10 rounded-md text-white bg-white/10 outline-none my-auto"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            />
            <span className="text-5xl w-40">
              ${selectedOption.price.toFixed(2)}
            </span>
          </div>
          <Toaster position="bottom-right" reverseOrder={false} />
          <button
            className="bg-white/10 border-2 border-white/10 mt-5 text-white px-7 py-2 rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
