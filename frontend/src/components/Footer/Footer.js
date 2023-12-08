import React from "react";
import "./footer.css";

const Footer = () => { 
  return (
    <footer>
      <div className=" container mx-auto py-8 lg:px-16 sm:px-8">
        <div className="flex justify-between text-left small-screen">
          <div className="footer-item">
            <h5 className="mb-2.5 font-bold">Shop</h5>

            <ul className="mb-0 list-none">
              <li className="mb-1">
                <a href="#!">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#!">Contact Us</a>
              </li>
              <li className="mb-1">
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="mb-2.5 font-bold">Categories</h5>

            <ul className="mb-0 list-none">
              <li className="mb-1">
                <a href="#!">Electronics</a>
              </li>
              <li className="mb-1">
                <a href="#!">Home & Furniture</a>
              </li>
              <li className="mb-1">
                <a href="#!">Fashion</a>
              </li>
              <li>
                <a href="#!">Books & Media</a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="mb-2.5 font-bold">Account</h5>

            <ul className="mb-0 list-none">
              <li className="mb-1">
                <a href="#!">Sign in</a>
              </li>
              <li className="mb-1">
                <a href="#!">Sign up</a>
              </li>
              <li>
                <a href="#!">Membership</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-2 text-center copyright">
        <p>
        © Copyright BeyondFinds 2023 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
