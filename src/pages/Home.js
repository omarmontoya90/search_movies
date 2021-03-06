import React, { useState } from 'react'

import {Title}      from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import MoviesList   from '../components/MoviesList'

function Home() {
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

  return (
    <div>
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={handleResults}/>
      </div>
      { usedSearch
        ? renderResults()
        : <small>Use the form to search a movie</small>
      }
    </div>
  )
}

export default Home
