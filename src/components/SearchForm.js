import React, { Component } from 'react'

export class SearchForm extends Component{
  state = {
    inputMovie: ""
  }

  handleChange = (event) => {
    this.setState( {inputMovie: event.target.value} )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {inputMovie} = this.state
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
	this.props.onResults(results.Search)
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="Movie to search..."/>
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
export default SearchForm;
