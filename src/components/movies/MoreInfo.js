import React, {useState, useEffect} from 'react';
import {  getAllMovies, getAllMovies2 } from './MovieManager';
import { MoreInfoCard, MoreInfoCard2 } from './MoreInfoCard';
import { useParams } from 'react-router-dom';

export const MoreInfo = () => {
  // The initial state is an empty array
  const [movies, setMovies] = useState([])
  const {movieId} = useParams()
    const getMovies = () => {
		return getAllMovies().then(movieFromAPI => {
		const filterMovies = movieFromAPI.filter(movie => movie.id === (parseInt(movieId)))
			console.log(filterMovies);
			setMovies(filterMovies);
		});
	};
    useEffect(() => {
        getMovies();
    }, []);

	return (
        <>
        <div className="container-cards">
            {movies?.map(movie => <MoreInfoCard key={movie.id} movie={movie}  />)}
        </div>
        </>
    );
};

export const MoreInfo2 = () => {
    // The initial state is an empty array
    const [movies2, setMovies2] = useState([])
    const {movieId} = useParams()
      const getMovies2 = () => {
          return getAllMovies2().then(movieFromAPI => {
          const filterMovies = movieFromAPI.filter(movie => movie.id === (parseInt(movieId)))
              console.log(filterMovies);
              setMovies2(filterMovies);
          });
      };
      useEffect(() => {
          getMovies2();
      }, []);
  
      return (
          <>
          <div className="container-cards">
              {movies2?.map(movie => <MoreInfoCard2 key={movie.id} movie={movie}  />)}
          </div>
          </>
      );
  };