import React, {useState, useEffect} from 'react';
import {  getAllReads } from './ReadManager';
import { getComicById}  from "../comics/ComicManager"
import { ReadCard } from './ReadCard';
import { ComicCard } from '../comics/ComicCard';

export const ReadList = () => {
    // let comics = [];
  const [comics, setComics] = useState([])
    const geComics = () => {
        return getAllReads().then(readsFromApi => {
            // setComics(readsFromApi)
            readsFromApi.forEach(read => {
               getComicById(read.comicId).then(comic => {
                setComics(comics => [...comics, comic])
               })
            });
            console.log(comics)
        });
    };
    useEffect(() => {
        geComics();
    }, []);

	return (
        <>
        <div className="container-cards">
            <h1>Reading List</h1>
            <div>
            {comics?.map(comic => <ReadCard key={comic.Id} comic={comic}  />)}
            </div>
        </div>
        </>
    );
};