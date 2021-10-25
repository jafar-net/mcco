import React from 'react';
import "./Comic.css";
import { Link } from "react-router-dom"

export const ComicCard = ({ comic }) => {
  return (
    <div className="comic-list">
      <ul>
        <h3>{comic.title}</h3>
        <h4>Film Connection:</h4><p>{comic.description}</p>
        </ul>
    </div>
  );
}

