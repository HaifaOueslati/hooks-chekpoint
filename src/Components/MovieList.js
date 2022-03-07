import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import AddMovie from "./AddMovie";


const MovieList = ({ movies, filterTitle, filterRating, setMovies }) => {
  return (
    <div className="movies__container">
      <div className="movie__add">
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <div  className="moviesList">
        
          {movies
            .filter(
              (movie) =>
                movie.title
                  .toLowerCase()
                  .trim()
                  .includes(filterTitle.toLowerCase().trim()) &&
                movie.rating >= filterRating
            )
            .map((movie, index) => (
              <MovieCard movie={movie} index={index} key={index} />
            ))}
     
      </div>
    </div>
  );
};

export default MovieList;