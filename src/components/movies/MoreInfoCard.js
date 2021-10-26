import React from "react"
import "./Movies.css"

export const MoreInfoCard = ({movie}) => {
	return (
	<div>
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div>
    {movie.synopsis}
    </div>
    </div>
  ) 
}

export const MoreInfoCard2 = ({movie}) => {
	return (
	<div>
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div>
    {movie.synopsis}
    </div>
    </div>
  ) 
}