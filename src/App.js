import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import {Title}      from './components/Title'
import {SearchForm} from './components/SearchForm'

function App() {
  const [movies, setMovies] = useState([]);

  const handleResults = (results) => {
    setMovies(results)
  }

  const renderResults = () => {
    return ( movies.map( movie => {
        return <p key={movie.imdbID}>{movie.Title}</p>
      })
    )
  }


  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={handleResults}/>
      </div>
      { movies.length === 0
        ? <p> Without movies</p>
        : renderResults()
      }
    </div>
  );
}

export default App;
