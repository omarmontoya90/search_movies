import React, { Component } from  'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  fetchMovie ({id}){
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
	this.setState({movie})
      })
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.fetchMovie({id})
  }

  goBack () {
    window.history.back()
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return (
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}
