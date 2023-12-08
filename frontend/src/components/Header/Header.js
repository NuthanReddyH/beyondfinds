import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import companyLogo from "../../assets/logo.png";
import { logout } from "../../data/authSlice";
import AccountMenu from "../common/ProfileToggle";
import { fetchCategories } from "../../data/productThunk";
import SearchIcon from "@mui/icons-material/Search";
import SearchComponent from "../common/Search";
import MessageIcon from "@mui/icons-material/Message";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const showCategoryLinks = location.pathname !== "/chat";
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.products || []);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-white">
        <div className={`menu-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container flex items-center justify-between mx-auto py-4 lg:px-16 sm:p-8">
          <Link to="/" className="flex items-center">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="self-center h-10 w-auto"
            />
          </Link>
          <div className="flex space-x-4 ml-auto items-center mobile-menu">
            <div className="main-search">
          <SearchComponent />

            </div>
          {isAuthenticated ? (
              <>
                <Link to="/favorites">
                  <IconButton color="inherit">
                    <FavoriteBorder />
                  </IconButton>
                </Link>
                <Link to="/chat">
                  <IconButton color="inherit">
                    <MessageIcon />
                  </IconButton>
                </Link>
                <AccountMenu user={user} handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none mt-1"
                >
                  Login
                </Link>
              </>
            )}
            <div className="menu-bar" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            </div>
            </div>
            
            <div className="side-menu">
            {showCategoryLinks && (
              <div className="bottom-nav py-4">
                <ul className="flex flex-wrap container mx-auto lg:px-16 sm:px-8">
                  <li>
                    <Link
                      to={`/products`}
                      className="hover:text-gray-700 focus:outline-none"
                    >
                      All
                    </Link>
                  </li>
                  {categories?.map((category) => (
                    <li key={category._id}>
                      <Link
                        to={`/category/${category.name}/${category._id}`}
                        className="hover:text-gray-700 focus:outline-none"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
      
      <SearchComponent />
          </div>

          {/* <div className="flex space-x-4 ml-auto items-center main-menu">
            <SearchComponent />
            {isAuthenticated ? (
              <>
                <Link to="/favorites">
                  <IconButton color="inherit">
                    <FavoriteBorder />
                  </IconButton>
                </Link>
                <Link to="/chat">
                  <IconButton color="inherit">
                    <MessageIcon />
                  </IconButton>
                </Link>
                <AccountMenu user={user} handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none mt-1"
                >
                  Login
                </Link>
              </>
            )}
          </div> */}
        </div>
      </nav>
      {showCategoryLinks && (
        <div className="bottom-nav bg-gray-100 py-4 main-menu">
          <ul className="flex justify-between container mx-auto lg:px-16 sm:px-8">
            <li>
              <Link
                to={`/products`}
                className="hover:text-gray-700 focus:outline-none"
              >
                All
              </Link>
            </li>
            {categories?.map((category) => (
              <li key={category._id}>
                <Link
                  to={`/category/${category.name}/${category._id}`}
                  className="hover:text-gray-700 focus:outline-none ml-2"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
