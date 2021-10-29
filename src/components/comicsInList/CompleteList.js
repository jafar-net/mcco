import { CompleteCard } from './CompleteCard';
import React, {useState, useEffect} from 'react';
import { getAllComplete, deleteComplete } from "./ReadManager";

export const Complete = () => {
    const [completed, setComplete] = useState([])
      const getComplete = () => {
          return getAllComplete().then(completeFromAPI => {
              console.log(completeFromAPI)
              setComplete(completeFromAPI);
          });
      };

      const handleDeleteComplete = id => {
        console.log(id)
        deleteComplete(id)
            .then(() => getAllComplete().then(setComplete));
    };

  
      useEffect(() => {
          getComplete();
      }, []);
  
      return (
          <>
          <div className="container-cards">
              <h1>Completed</h1>
              <ul>
              {completed?.map(complete => <CompleteCard key={complete.id} complete={complete}  
               handleDeleteComplete={handleDeleteComplete} />)}
              </ul>
          </div>
          </>
      );
  };
  