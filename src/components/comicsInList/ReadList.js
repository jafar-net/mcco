import React, {useState, useEffect} from 'react';
import {  getAllReads } from './ReadManager';
import { ReadCard } from './ReadCard';
import { deleteRead, Completes } from "./ReadManager"
import { getAllComics } from '../comics/ComicManager';

export const ReadList = ({handleMustRead}) => {
  const [reads, setReads] = useState([])
  const userId=sessionStorage.getItem("mcco_user")
    const getComics = () => {
        return getAllReads(userId).then(readsFromApi => {
            // setReads(readsFromApi)
                setReads(readsFromApi)
               })
    
    };

    const handleDeleteRead = id => {
        console.log(id)
        deleteRead(id)
            .then(() => getAllReads(userId).then(setReads));
    };

    const handleCompletes = id => {
        Completes(id)
            .then(() => getAllReads(userId).then(setReads));
    }

    useEffect(() => {
        getComics();
    }, []);

	return (
        <>
        <div className="container-cards">
            <h1>Reading List</h1>
            <div>
            {reads.map(read => read.isCompleted ? console.log("true")
                     : <ReadCard 
                        key={read.id} read={read} 
                        handleDeleteRead={handleDeleteRead} 
                        handleCompletes={handleCompletes}
                        getComics={getComics}
                        handleMustRead={handleMustRead}
                       />)}
            </div>
            <h1>Completed List</h1>
            <div>
            {reads.map(read => !read.isCompleted ? console.log("true")
                     : <ReadCard 
                        key={read.id} read={read} 
                        handleDeleteRead={handleDeleteRead} 
                        handleCompletes={handleCompletes}
                        getComics={getComics}
                        handleMustRead={handleMustRead}
                       />)}
            </div>

        </div>
        </>
    );
};