
import React, { useEffect, useState } from 'react';
import { getComicById, getAllComics } from './ComicManager';
import { ComicCard } from './ComicCard';
import { useParams } from 'react-router-dom';

export const ComicList = () => {
	console.log("ComicList Invoked")
    const [comic, setComic] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // const {movieId} = useParams()
    
	const getComics = () => {
		console.log("getComics Invoked")
		return getAllComics().then(comicFromAPI => {
			console.log(comicFromAPI);
			setComic(comicFromAPI);
		});
	};

	useEffect(() => {
		console.log("useEffect Invoked")
		getComics();
	}, []);

    // useEffect(() => {
    //     console.log("useEffect", movieId)
    //     getComicById(movieId)
    //       .then(comic => {
    //         setComic({
    //           name: comic.title,
    //           breed: comic.description
    //         });
    //         setIsLoading(false);
    //       });
    //   }, [movieId]);

	return (
		<>
        <h1>Comic Insiprations</h1>
		<div className="container-cards">
			{comic?.map(comic =>
				<ComicCard key={comic.id} comic={comic}/>)}
		</div>
		</>
	);
};