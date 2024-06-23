import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const cart = await request.json();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [item.thumbnail],
          },
          unit_amount: (item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });
    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error) {
    return NextResponse.json({ statusCode: 500, message: error.message });
  }
}
