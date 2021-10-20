import React from "react"

export const MovieCard = ({movie}) => {
	return (
	<div>
    <h3>{movie.title}</h3>
    <img src={movie.movieImg} alt={movie.title}></img>
    </div>
  ) 
}

export const MovieCard2 = ({movie}) => {
	return (
	<div>
    <h3>{movie.title}</h3>
    <img src={movie.movieImg} alt={movie.title}></img>
    </div>
  ) 
}