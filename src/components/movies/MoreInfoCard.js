import React from "react"
import "./Movies.css"

export const MoreInfoCard = ({movie}) => {
	return (
	<div>
    <img src={movie.movieImg} alt={movie.title} className="img-movie-comics"></img>
    <h2 className="syn">Synopsis</h2>
    <div className="movie-syn">
    {movie.synopsis}
    </div>
    </div>
  ) 
}

export const MoreInfoCard2 = ({movie}) => {
	return (
	<div>
    <img src={movie.movieImg} alt={movie.title} className="img-movie-comics"></img>
    <h2 className="syn">Synopsis</h2>
    <div className="movie-syn">
    {movie.synopsis}
    </div>
    </div>
  ) 
}