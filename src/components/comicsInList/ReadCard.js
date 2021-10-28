import React from "react" 
import { getComicById}  from "../comics/ComicManager"

export const ReadCard = ({comic}) => {
  console.log(comic)
	return (
	<div>
    <ul>
    <a target="_blank" href={comic.url}>{comic.title}</a>
    </ul>
    </div>
  ) 
}