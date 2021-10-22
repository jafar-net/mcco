import React from 'react';
import "./Comic.css";
import { Link } from "react-router-dom"

export const ComicCard = ({ comic }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {comic.title}</h3>
        <p>Film Connection: {comic.description}</p>
      </div>
    </div>
  );
}

