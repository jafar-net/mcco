import React from 'react';
import "./Comic.css";
import { useHistory } from "react-router-dom"

export const ComicCard = ({ comic }) => {
  const history = useHistory();
  const handleAddList = () => {
                fetch("http://localhost:8088/reads", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      comicId: `${comic.id}`,
                      userId: sessionStorage.getItem("mcco_user"),
                      isCompleted: false,
                      categoryId: 1,
                    })
                })
                    .then(res => res.json())
                    .then(add => {
                            history.push("/reading_list")
                    })
            
            }

  return (
    <div className="container-comic">
      <ul className="list">
        <h2 className="comic-title">{comic.title}</h2>
        <h4 className="film-connection">Film Connection:</h4>
        <p className="descript">{comic.description}</p>
        <a href={comic.url} target="_blank"><button className="comic-button">More Info</button></a>
        <button className="comic-buttons" type="button"
        comic={comic}
                onClick={() => handleAddList()}>
                Add to List
            </button>
        </ul>
    </div>
  );
}

