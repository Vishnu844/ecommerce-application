"use client";

import { addToCart } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";

function AddToCartButton({ productDetails }) {
  const { id, title, thumbnail, price } = productDetails;
  const product = {
    id,
    title,
    thumbnail,
    price,
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Added to cart successfully!!");
  };
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded"
      onClick={() => handleAddToCart()}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
