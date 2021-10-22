import React from "react"
import "./Movies.css"
import { Link } from "react-router-dom"

export const MovieCard = ({movie}) => {
	return (
	<div className="container">
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div className="middle">
    <Link to={`/comics/${movie.id}`}>
                <button className="text">More Info</button>
            </Link>
    </div>
    </div>
  ) 
}

export const MovieCard2 = ({movie}) => {
	return (
	<div className="container">
    <img src={movie.movieImg} alt={movie.title} className="image"></img>
    <div className="middle">
    <Link to={`/comics/${movie.id}`}>
                <button className="text">More Info</button>
            </Link>
    </div>
    </div>
  ) 
}

