import React from 'react'
import { Route } from "react-router-dom"
import {MovieList} from './components/movies/MovieList.js'

export const ApplicationViews = () => {
    return (
      <>
  
        <Route exact path="/movies">
          <MovieList />
        </Route>
        </>
  )
}
