import React, { Suspense, useContext } from "react";

import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Router, Redirect } from "@reach/router";

import { NavBar } from "./components/NavBar";  
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
//import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import {Context} from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import('./pages/Favs'));  

export const App = () => {
  const { isAuth } = useContext(Context);  
  
  return (
    <Suspense fallback={<div/>}>
      <GlobalStyle />
      <Logo />

      <Router>
        <NotFound default/>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path='/detail/:detailId' />
        { !isAuth && <NotRegisteredUser path='/login' /> }
        { !isAuth && <Redirect from='/favs' to='/login'/> }
        { !isAuth && <Redirect from='/user' to='/login'/> }
        { isAuth && <Redirect from='/login' to='/ '  />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Suspense>
  );
};
