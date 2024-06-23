"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer.js";
import ProductCard from "../components/product";
import { fetchAllProducts } from "@/actions";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [fragranceProducts, setFragranceProducts] = useState([]);
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetchAllProducts().then((res) => {
      setProducts(res.data?.products.slice(0, 8));
      setNewArrivals(res.data?.products.slice(0, 3));
      setBeautyProducts(
        res.data?.products?.filter((item) => item.category === "beauty")
      );
      setFragranceProducts(
        res.data?.products?.filter(
          (product) => product.category === "fragrances"
        )
      );
      setFurniture(
        res.data?.products?.filter(
          (product) => product.category === "furniture"
        )
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="hero text-center py-20 text-white">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Smart Shopping</h1>
            <p className="text-xl mt-4 font-medium">
              Find the best products at unbeatable prices.
            </p>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              Start Shopping
            </button>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <section className="new-arrivals mb-8">
            <h2 className="text-3xl font-semibold mb-4">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="all-products mb-8">
            <h2 className="text-3xl font-semibold mb-4">All Products</h2>
            <div className="flex overflow-x-scroll space-x-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="furniture-products mb-8">
            <h2 className="text-2xl font-semibold mb-4">Beauty Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {beautyProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="fragrances mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fragrances</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fragranceProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="furniture mb-8">
            <h2 className="text-2xl font-semibold mb-4">Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {furniture.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
