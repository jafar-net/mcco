import React from "react"

export const MustReadCard = ({categorie, handleDeleteMustRead}) => {
    if (categorie.isDeleted == null) {
	return (
        <div>
        <a className="read-title" target="_blank" href={categorie?.comic.url}>{categorie?.comic.title}</a>
        <div className="buttons">
          <input type="checkbox" className="read-buttons" />
          <button type="button" className="read-buttons" onClick={() => handleDeleteMustRead(categorie.id)}>Delete From List</button>
        </div>
        </div>
      ) 
    }
    else {
        return (
          <div></div>
        )
      }
      }