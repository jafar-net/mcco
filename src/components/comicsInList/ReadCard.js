import React from "react" 
import { useHistory } from "react-router-dom"
import "./Read.css"

export const ReadCard = ({read, handleCompleteComic, handleDeleteRead}) => {
  console.log(read)
  const history = useHistory();
  const handleMustRead = () => {
    fetch("http://localhost:8088/category_1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          comicId: `${read.id}`,
          userId: sessionStorage.getItem("mcco_user"),
          isCompleted: false
        })
    })
        .then(res => res.json())
        .then(add => {
                history.push("/reading_list")
        })

}
if (read.isDeleted == null) {
	return (
	<div>
    <a target="_blank" href={read.comic?.url}>{read.comic?.title}</a>
    <div>
        <input type="checkbox" className="complete"></input>Complete
          <button type="button" className="must-read" onClick={() => handleMustRead(read.id)}>Must Read</button>
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