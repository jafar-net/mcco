import React from "react"

export const MustReadCard = ({categorie, handleDeleteMustRead}) => {
    if (categorie.isDeleted == null) {
	return (
        <div>
            <ul>
        <a target="_blank" href={categorie?.comic.url}>{categorie?.comic.title}</a>
        <button type="button" className="button-del" onClick={() => handleDeleteMustRead(categorie.id)}>Delete From List</button>
        </ul>
        </div>
      ) 
    }
    else {
        return (
          <div></div>
        )
      }
      }