import React from "react" 
import { useHistory } from "react-router-dom"
import { getAllComics } from "../comics/ComicManager"
import "./Read.css"

export const ReadCard = ({read, handleDeleteRead, handleCompletes, getComics, handleMustRead}) => {
  console.log(read)
  const history = useHistory();
  

if (read.isDeleted == null) {
	return (
	<div>
    <a target="_blank" href={read.comic?.url}>{read.comic?.title}</a>
    <div>
          <input type="checkbox" className="checkbox" onClick={() => handleCompletes(read.id)} />
          <button type="button" className="must-read" onClick={() => handleMustRead(read.id, read)}>Must Read</button>
          <button type="button" className="button-del" onClick={() => handleDeleteRead(read.id)}>Delete From List</button>
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