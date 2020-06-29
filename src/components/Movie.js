import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    const { id, poster, title, year } = this.props

    return (
      <a href={`?id=${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={poster === 'N/A' ? "https://www.seekpng.com/png/small/762-7622625_cinta-cine-png-png-film-roll.png" : poster }
              alt={title}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Movie
