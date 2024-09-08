// src/components/header/Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search"; // Import the Search component

const Header = () => {
  const handleSearch = (query) => {
    // Implement search functionality or navigation based on query
    console.log("Searching for:", query);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://raw.githubusercontent.com/AbdullahButt2611/MoviesApp/main/External%20Images/logo.png"
            alt="Logo"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
      </div>
      <div className="headerRight">
        <Search onSearch={handleSearch} /> {/* Include Search component here */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <i id="home-icon" className="fa-sharp-duotone fa-solid fa-house"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
