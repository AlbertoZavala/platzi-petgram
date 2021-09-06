import React from "react";

import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Router } from "@reach/router";
import { NavBar } from "./components/NavBar";  

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
      <NavBar />
    </>
  );
};
