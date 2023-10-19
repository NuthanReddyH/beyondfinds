import React, { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.png"

const Header = () => {
  const token = localStorage.getItem("token");
  console.log({token})
  const [loggedIn, setLoggedIn] = useState(!!token);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setLoggedIn(false);
  };


  return (
    <div>
      <nav className="bg-white">
        <div className="container flex items-center justify-between mx-auto py-4 lg:px-16 sm:px-8">
        <Link to="/" className="flex items-center">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="self-center h-10 w-auto"
            />
          </Link>
          <div className="flex space-x-4 ml-auto">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-60 md:w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-200 rounded bg-gray-200 hover:border-gray-200 focus:outline-none"
                placeholder="Search"
              />
            </div>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {loggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-500 hover:text-gray-700 focus:outline-none mt-1">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="bottom-nav bg-gray-100 py-4 ">
        <ul className="flex justify-between container mx-auto lg:px-16 sm:px-8">
          <li>
          <Link to="/category" className="hover:text-gray-700 focus:outline-none">
              Fashion
            </Link>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Vehicles</a>
          </li>
          <li>
            <a href="/">Rentals</a>
          </li>
          <li>
            <a href="/">Jewellery & Watches</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
