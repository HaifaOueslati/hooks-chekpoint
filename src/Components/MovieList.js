import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import AddMovie from "./AddMovie";
import {Link} from 'react-router-dom'


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
            .map((movie) => (
              <div key={movie.id}>
              <Link style={{textDecoration:'none'}} to={`/${movie.id}`}>
              <MovieCard movie={movie}  key={movie.id} />
              </Link>
              </div>
            ))}
     
     </div>
    </div>
  );
};

export default MovieList;