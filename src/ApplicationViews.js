import React from 'react'
import { Route } from "react-router-dom"
import {MovieList, MovieList2} from './components/movies/MovieList.js'
import { ComicList } from './components/comics/ComicList.js'
import { MoreInfo, MoreInfo2 } from './components/movies/MoreInfo.js'
import { ReadList } from './components/comicsInList/ReadList.js'
import { MustRead } from "./components/comicsInList/MustReadList"
import { useState } from 'react'
import { getAllCategories } from './components/comicsInList/ReadManager.js'

export const ApplicationViews = () => {
  const [categories, setCategories] = useState([])
  const userId=sessionStorage.getItem("mcco_user")
  const handleMustRead = (id, read) => {
    fetch("http://localhost:8088/category1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          comicId: `${read.comicId}`,
          userId: sessionStorage.getItem("mcco_user"),
          isCompleted: false
        })
    })
        .then(res => res.json())
        .then(add => {
                getCategories();
        })

}

const getCategories = () => {
  return getAllCategories(userId).then(categoriesfromAPI => {
      setCategories(categoriesfromAPI)
  })
}

    return (
      <>
  
        <Route exact path="/">
          <MovieList />
        </Route>

        <Route exact path="/movies2">
          <MovieList2 />
        </Route>

        <Route exact path="/comics/:movieId(\d+)">
                <MoreInfo />
                <MoreInfo2/>
                <ComicList />
        </Route>
            
        <Route exact path="/reading_list">
          <ReadList handleMustRead={handleMustRead}/>
          <MustRead getCategories={getCategories} categories={categories} setCategories={setCategories}/>
        </Route>

        </>
  )
}