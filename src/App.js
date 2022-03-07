import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import { movieData } from './Data';

function App() {
  
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} filterRating={filterRating} />
      </div>
      <MovieList movies= {movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating} />
    </div>
  );
}

export default App;