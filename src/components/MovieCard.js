import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const {movie}=this.props;
    return (

        <div className="movie-card">
            <div className="left">
                <img src={movie.Poster} alt="movie-poster" />
            </div>
            <div className="right">
                <div className="title">
                    {movie.Title}
                </div>
                <div className="plot">
                    {movie.Plot}
                </div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    <button className="fovourite-btn">Favourite</button>
                </div>
            </div>
        </div>
        )
  }
}