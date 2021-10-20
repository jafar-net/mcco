import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"
import "./main.css"

export const MCCO = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("mcco_user")) {
          return (
            <>
            <h1 className="header-title">Marvel Cinematic Comic Origins</h1>
            <NavBar />
            <ApplicationViews />
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
