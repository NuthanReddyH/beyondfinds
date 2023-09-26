import React from "react";

const Header = () => {
    return (
        <div>
        <nav class="bg-white">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto py-4">
    <a href="#" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap">
        BeyondFinds
      </span>
    </a>
    <div class="flex space-x-4 ml-auto">
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          class="block w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-200 rounded bg-gray-200 hover:border-gray-200 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div class="flex space-x-4">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none ">
          Sign In
        </button>
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</nav>
<div className="bottom-nav bg-gray-100 py-4">
  <ul className="flex justify-between max-w-screen-xl mx-auto">
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
    <li><a href="">Fashion</a></li>
  </ul>
</div>

</div>

      
    );
    
};

export default Header;
