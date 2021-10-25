
import React, { useEffect, useState } from 'react';
import { getComicById, getAllComics } from './ComicManager';
import { ComicCard } from './ComicCard';
import { useParams } from 'react-router-dom';

export const ComicList = () => {
	console.log("ComicList Invoked")
    const [comic, setComic] = useState([]);
    const {movieId} = useParams()
	const getComics = () => {
		console.log("getComics Invoked")
		return getAllComics().then(comicFromAPI => {
		const filterComics = comicFromAPI.filter(comic => comic.movieId === parseInt(movieId))
			console.log(filterComics);
			setComic(filterComics);
		});
	};

	useEffect(() => {
		console.log("useEffect Invoked")
		getComics();
	}, []);


	return (
		<>
        <h1>Comic Insiprations</h1>
		<div className="container-cards">
			{comic?.map(comic =>
				<ComicCard key={comic.movieId} comic={comic}/>)}
		</div>
		</>
	);
};