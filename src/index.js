import React from "react";
/* import ReactDOM from 'react-dom'; */
import MyProvider from "./context/MyProvider";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>,
  rootElement
);

/* ReactDOM.render(
    
    <MyProvider>
    <App />
    </MyProvider>
    , document.querySelector('#root')
); */
