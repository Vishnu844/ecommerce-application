"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Pagination from "@/components/pagination";
import Product from "@/components/product";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

function Products() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const sortOptions = ["title", "price", "rating"];
  const [order, setOrder] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [page, setPage] = useState(1);

  const handleSort = () => {
    setOrder(!order ? true : false);
  };

  const handleSetSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/search?q=${search}&sortBy=${sortBy}&order=${
      order ? "asc" : "desc"
    }&limit=10&skip=${page * 10 - 10}`,
    fetcher
  );
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end">
            <select
              name="sortBy"
              onChange={handleSetSortBy}
              className="bg-gray-100 border-none outline-none cursor-pointer"
            >
              <option>Select filter</option>
              {sortOptions.map((option, i) => {
                return (
                  <>
                    <option key={i} value={option}>
                      {option}
                    </option>
                  </>
                );
              })}
            </select>
            <button
              onClick={() => handleSort()}
              className="px-4 py-2 m-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            >
              Sort {order ? "↑" : "↓"}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {data?.total > 10 && (
        <Pagination total={data?.total} page={page} setPage={setPage} />
      )}
      <Footer />
    </>
  );
}

export default Products;
