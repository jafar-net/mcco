import React from 'react'
import { Route } from "react-router-dom"
import {MovieList, MovieList2} from './components/movies/MovieList.js'
import { ComicList } from './components/comics/ComicList.js'
import { MoreInfo, MoreInfo2 } from './components/movies/MoreInfo.js'
import { ReadList } from './components/comicsInList/ReadList.js'
import { MustRead } from "./components/comicsInList/MustReadList"
import { Complete } from './components/comicsInList/CompleteList.js'

export const ApplicationViews = () => {
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
          <ReadList/>
          <MustRead/>
          <Complete/>
        </Route>
        </>
  )
}