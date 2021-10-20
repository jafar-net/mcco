import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"

export const MCCO = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("mcco_user")) {
          return (
            <>
            <h1>MCCO</h1>
              <ApplicationViews />
              <NavBar />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  
    </>
)
