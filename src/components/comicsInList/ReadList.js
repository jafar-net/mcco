import React, {useState, useEffect} from 'react';
import {  getAllReads } from './ReadManager';
import { ReadCard } from './ReadCard';

export const ReadList = () => {
  // The initial state is an empty array
  const [reads, setReads] = useState([])
    const getReads = () => {
        return getAllReads().then(readsFromApi => {
            setReads(readsFromApi)
        });
    };
    useEffect(() => {
        getReads();
    }, []);

	return (
        <>
        <div className="container-cards">
            {reads?.map(read => <ReadCard key={read.id} read={read}  />)}
        </div>
        </>
    );
};