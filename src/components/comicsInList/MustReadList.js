import React, {useState, useEffect} from 'react';
import {  deleteMustRead, getAllCategories } from "./ReadManager";
import { MustReadCard } from './MustRead';
import "./Read.css"

export const MustRead = ({getCategories, categories, setCategories}) => {
  // The initial state is an empty array
//   const [categories, setCategories] = useState([])
  const userId=sessionStorage.getItem("mcco_user")



    const handleDeleteMustRead = id => {
        console.log(id)
        deleteMustRead(id)
            .then(() => getAllCategories(userId).then(setCategories));
    };

    useEffect(() => {
        getCategories();
    }, []);

	return (
        <>
        <div className="reads-cards">
            <h1 className="must-reads">Must Reads</h1>
            <div>
            {categories.map(categorie => <MustReadCard key={categorie.id} categorie={categorie}
          handleDeleteMustRead={handleDeleteMustRead} 
          getCategories={getCategories} />)}
          
            </div>
        </div>
        </>
    );
};

