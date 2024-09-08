// src/pages/SearchResults/SearchResults.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/card/card"; // Import Cards component
import "./SearchResults.css";

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch search results based on the query
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e84138f418be87db4b3df51692721f3d&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching search results:", error));
  }, [query]);

  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      <div className="results-list">
        {isLoading ? (
          <div className="loading-message">Loading results...</div>
        ) : results.length > 0 ? (
          results.map((movie) => <Cards key={movie.id} movie={movie} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
