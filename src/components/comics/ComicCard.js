import React from 'react';
import "./Comic.css";
import { useHistory } from "react-router-dom"

export const ComicCard = ({ comic }) => {
  const history = useHistory();
  return (
    <div className="comic-list">
      <ul>
        <h3>{comic.title}</h3>
        <h4>Film Connection:</h4><p>{comic.description} <a href={comic.url} target="_blank"><button>More Info</button></a><button className="addtolist-button" type="button"
                onClick={() => history.push(`/reading_list`)}>
                Add to List
            </button></p>
        </ul>
    </div>
  );
}

