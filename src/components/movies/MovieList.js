import React, {useState, useEffect} from 'react';
import {  getAllMovies } from './MovieManager';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
  // The initial state is an empty array
  const [movies, setMovies] = useState([])
    const getMovies = () => {
        return getAllMovies().then(moviesFromApi => {
            setMovies(moviesFromApi)
        });
    };
    useEffect(() => {
        getMovies();
    }, []);

	return (
        <>
        <div className="container-cards">
            {movies?.map(movie => <MovieCard key={movie.id} movie={movie}  />)}
        </div>
        </>
    );
};

// export const MovieList = (props) => {
// 	return (
// 		<>
// 			{props.movies.map((movie, index) => (
// 				<div className='image-container d-flex justify-content-start m-3'>
// 					<img src={movie.movieImg} alt='movie'></img>
// 				</div>
// 			))}
// 		</>
// 	);
// };