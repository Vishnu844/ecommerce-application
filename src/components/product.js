"use client";

import { useRouter } from "next/navigation"; // always remember to use the router in next/navigtion but not from next/router
import Rating from "./rating";

export default function Product({ product }) {
  const router = useRouter();
  return (
    <div
      key={product.id}
      className="flex flex-col justify-between bg-white p-4 rounded shadow"
      onClick={() => router.push(`/${product?.id}`)}
    >
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h2 className="text-xl font-bold">{product.title}</h2>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-700">${product.price}</p>
        <Rating rating={product.rating} />
      </div>
    </div>
  );
}
