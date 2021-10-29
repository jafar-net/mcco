import React from "react"

export const CompleteCard = ({complete, handleDeleteComplete}) => {
    if (complete.isDeleted == null) {
	return (
        <div>
            <ul>
        <a target="_blank" href={complete?.comic.url}>{complete?.comic.title}</a>
        <button type="button" className="button-del" onClick={() => handleDeleteComplete(complete.id)}>Delete From List</button>
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