import React from 'react'
import { Route } from "react-router-dom"
import {MovieList, MovieList2} from './components/movies/MovieList.js'

export const ApplicationViews = () => {
    return (
      <>
  
        <Route exact path="/movies">
          <MovieList />
        </Route>

        <Route exact path="/movies2">
          <MovieList2 />
        </Route>
        </>
  )
}
