import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsBySearch } from "../../data/productThunk";
import SearchIcon from "@mui/icons-material/Search";
import './Search.css';
import { Link } from "react-router-dom";
import { getImageData } from "../../utils";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchResults = useSelector((state) => state.products.searchResults);
  const dropdownRef = useRef(null);

  // Function to handle click outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim()) {
      dispatch(fetchProductsBySearch(query.trim()));
      setIsDropdownVisible(true);
    } else {
      dispatch({ type: "products/clearSearchResults" });
      setIsDropdownVisible(false);
    }
  };

  const handleItemClick = () => {
    setIsDropdownVisible(false); // Close the dropdown when an item is clicked
  };

  console.log({searchResults})
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <SearchIcon />
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {isDropdownVisible && searchResults.length > 0 && (
        <ul className="results-dropdown" ref={dropdownRef}>
          {searchResults.map((item) => (
            <li key={item._id} onClick={handleItemClick}>
                <img src={getImageData(item.productImage)} alt={item.title} className="product-image" />
              <Link to={`/product/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
