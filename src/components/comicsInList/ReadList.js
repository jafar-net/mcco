import React, {useState, useEffect} from 'react';
import {  getAllReads } from './ReadManager';
import { ReadCard } from './ReadCard';
import { deleteRead } from "./ReadManager"

export const ReadList = () => {
  const [reads, setReads] = useState([])
    const getComics = () => {
        return getAllReads().then(readsFromApi => {
            // setReads(readsFromApi)
                setReads(readsFromApi)
               })
    
    };

    const handleDeleteRead = id => {
        console.log(id)
        deleteRead(id)
            .then(() => getAllReads().then(setReads));
    };

    useEffect(() => {
        getComics();
    }, []);

	return (
        <>
        <div className="container-cards">
            <h1>Reading List</h1>
            <div>
            {reads?.map(read => 
                     <ReadCard 
                        key={read.id} read={read} 
                        handleDeleteRead={handleDeleteRead} />)}
            </div>
        </div>
        </>
    );
};