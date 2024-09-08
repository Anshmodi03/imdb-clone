import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/movieList/movieList.js";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e84138f418be87db4b3df51692721f3d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error)); // Added error handling
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000} // Time each slide is displayed (5 seconds)
        infiniteLoop={true}
        showStatus={false}
        swipeable={false}
        emulateTouch={false} // Optional: Allow touch swiping on mobile
        transitionTime={700} // Set transition time to 1000ms (1 second)
        stopOnHover={false} // Ensure autoplay continues even if hovered over
      >
        {popularMovies.map((movie) => (
          <Link
            key={movie.id} // Ensure a unique key is provided
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.original_title} // Added alt text for accessibility
              />
            </div>

            <div className="posterImage__overlay">
              <div className="posterImage__title">{movie.original_title}</div>

              <div className="posterImage__runtime">
                {movie.release_date}
                <span className="posterImage__rating">
                  {movie.vote_average}
                  <i className="fas fa-star" />
                </span>
              </div>

              <div className="posterImage__description">{movie.overview}</div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
