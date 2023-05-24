import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "./routes";
import GlobalStyle from "./styles/globalStyles";

const App: FC = () => (
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
