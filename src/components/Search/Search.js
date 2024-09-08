import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}`); // Navigate to search results page with query
      setPopupOpen(false); // Close the popup after searching
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const togglePopup = () => {
    setPopupOpen(true); // Open the popup when the search button is clicked
  };

  const closePopup = () => {
    setPopupOpen(false); // Close the popup
  };

  return (
    <div className="search-wrapper">
      {!isPopupOpen && (
        <button onClick={togglePopup} className="btn">
          <i className="fas fa-search"></i> {/* Search button */}
        </button>
      )}
      {isPopupOpen && (
        <div className="search-popup">
          <div className="search-container">
            <button className="btn" onClick={closePopup}>
              <i className="fas fa-times"></i> {/* Close button */}
            </button>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="search-input"
            />

            <button onClick={handleSearch} className="btn btn1">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
