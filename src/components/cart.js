"use client";

import { useDispatch, useSelector } from "react-redux";
import NavBar from "./navbar";
import Footer from "./footer";
import { removeFromCart } from "@/store/slices/cart-slice";
import { decreaseItemQuantity } from "@/store/slices/cart-slice";
import CheckoutButton from "./checkoutButton";
import Image from "next/image";
import cartImage from "../../public/images/cart.jpg";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    alert("Removed from the cart successfully!!");
  };

  const handleDecreaseItemQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <>
      <NavBar />
      <div
        className={`container mx-auto p-4 min-h-screen ${
          cart.length === 0 ? "" : "bg-gray-100"
        }`}
      >
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center container mx-auto p-4 text-center">
            <Image src={cartImage} alt="cart-image" height={500} />
            <p className="w-fit mt-8">Your cart is Empty</p>
          </div>
        ) : (
          cart?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-4 bg-white px-3 rounded"
            >
              <div className="flex items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex gap-3">
                  <button> + </button>
                  <div className="p-3 bg-slate-100 rounded-md">
                    {product.quantity}
                  </div>
                  <button
                    onClick={() => handleDecreaseItemQuantity(product.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {cart.length !== 0 ? (
          <div className="flex justify-end mt-4">
            <CheckoutButton cartItems={cart} />
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
