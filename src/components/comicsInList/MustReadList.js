import React, {useState, useEffect} from 'react';
import {  deleteMustRead, getAllCategories, getAllComplete } from "./ReadManager";
import { MustReadCard } from './MustRead';

export const MustRead = () => {
  // The initial state is an empty array
  const [categories, setCategories] = useState([])
    const getCategories = () => {
		return getAllCategories().then(categorieFromAPI => {
            console.log(categorieFromAPI)
			setCategories(categorieFromAPI);
		});
	};

    const handleDeleteMustRead = id => {
        console.log(id)
        deleteMustRead(id)
            .then(() => getAllCategories().then(setCategories));
    };

    useEffect(() => {
        getCategories();
    }, []);

	return (
        <>
        <div className="container-cards">
            <h1>Must Reads</h1>
            <ul>
            {categories?.map(categorie => <MustReadCard key={categorie.id} categorie={categorie}
          handleDeleteMustRead={handleDeleteMustRead}  />)}
          
            </ul>
        </div>
        </>
    );
};

