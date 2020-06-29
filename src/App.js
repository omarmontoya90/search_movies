import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import {Title}      from './components/Title'
import {SearchForm} from './components/SearchForm'
import MoviesList   from './components/MoviesList'

function App() {
  const [movies, setMovies] = useState([]);

  const handleResults = (results) => {
    setMovies(results)
  }

  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={handleResults}/>
      </div>
      { movies.length === 0
        ? <p> Without movies</p>
        : <MoviesList movies={movies}/>
      }
    </div>
  );
}

export default App;
