import React, {useState, useEffect} from 'react';
import {  getAllMovies, getAllMovies2 } from './MovieManager';
import { MovieCard, MovieCard2 } from './MovieCard';

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

export const MovieList2 = () => {
    const [movies2, setMovies2] = useState([])
      const getMovies2 = () => {
          return getAllMovies2().then(moviesFromApi => {
              setMovies2(moviesFromApi)
          });
      };
      useEffect(() => {
          getMovies2();
      }, []);
  
      return (
          <>
          <div className="container-cards">
              {movies2?.map(movie => <MovieCard2 key={movie.id} movie={movie}  />)}
          </div>
          </>
      );
  };