import React from "react";
import "./footer.css";

const Footer = () => { 
  return (
    <footer class="flex flex-col items-center lg:text-left max-w-screen-xl mx-auto">
      <div class="container py-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 text-black">
          <div>
            <h5 class="mb-2.5 font-bold">Shop</h5>

            <ul class="mb-0 list-none">
              <li class="mb-1">
                <a href="#!">About Us</a>
              </li>
              <li class="mb-1">
                <a href="#!">Contact Us</a>
              </li>
              <li class="mb-1">
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 class="mb-2.5 font-bold">Categories</h5>

            <ul class="mb-0 list-none">
              <li class="mb-1">
                <a href="#!">Electronics</a>
              </li>
              <li class="mb-1">
                <a href="#!">Home & Furniture</a>
              </li>
              <li class="mb-1">
                <a href="#!">Fashion</a>
              </li>
              <li>
                <a href="#!">Books & Media</a>
              </li>
            </ul>
          </div>

          <div >
            <h5 class="mb-2.5 font-bold">Account</h5>

            <ul class="mb-0 list-none">
              <li class="mb-1">
                <a href="#!">Sign in</a>
              </li>
              <li class="mb-1">
                <a href="#!">Sign up</a>
              </li>
              <li>
                <a href="#!">Membership</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full p-2 text-center copyright">
        <p>
        © Copyright BeyondFinds 2023 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
