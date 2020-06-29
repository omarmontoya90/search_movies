import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import {Title}      from './components/Title'
import {SearchForm} from './components/SearchForm'
import MoviesList   from './components/MoviesList'
import {Detail}     from './pages/Detail'

function App() {
  const [movies, setMovies] = useState([])
  const [usedSearch, setUsedSearch] = useState(false)

  const handleResults = (results) => {
    setMovies(results)
    setUsedSearch(true)
  }

  const renderResults = () => {
    return  movies.length === 0
      ? <p> Without movies</p>
      : <MoviesList movies={movies}/>
  }

  const url = new URL(document.location)
  const hasId = url.searchParams.has('id')

  var page = null
  if (hasId) {
     page =  <Detail id={url.searchParams.get('id')}/>
  } else {
    page =
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={handleResults}/>
        </div>
        { usedSearch
          ? renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
  }

  return page
}

export default App;
