import React from "react";

import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Router } from "@reach/router";

import { NavBar } from "./components/NavBar";  
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import Context from "./Context";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({isAuth}) => 
          isAuth
          ? 
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>
          :
          <Router>
            <NotRegisteredUser path='/favs'/>
            <NotRegisteredUser path='/user'/>  
          </Router>
        } 
      </Context.Consumer>

      <NavBar />
    </>
  );
};
