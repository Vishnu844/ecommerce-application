"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/ecom.png";
import profile from "../../public/images/user.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?q=${searchQuery}`);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image src={logo} alt="Ecommerce-Logo" width={100} height={100} />
          </Link>
          <form className="relative" onSubmit={handleSearch}>
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 lg:w-96"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <Link href="/cart">
            <p className="block px-2 mr-2 text-gray-800 hover:bg-gray-200 rounded text-2xl">
              🛒
            </p>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <Image
                src={profile}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link href="/profile">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Profile
                  </p>
                </Link>

                <button
                  // onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
