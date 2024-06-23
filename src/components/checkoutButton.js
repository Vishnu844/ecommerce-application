import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = ({ cartItems }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const { id } = await response.json();
    const { error } = await stripe.redirectToCheckout({
      sessionId: id,
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
