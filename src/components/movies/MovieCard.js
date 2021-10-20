import React from "react"
import "./Movies.css"

export const MovieCard = ({movie}) => {
	return (
	<div className="container">
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div className="middle">
      <div className="text">More Info</div>
    </div>
    </div>
  ) 
}

export const MovieCard2 = ({movie}) => {
	return (
	<div className="container">
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div className="middle">
      <div className="text">More Info</div>
    </div>
    </div>
  ) 
}

