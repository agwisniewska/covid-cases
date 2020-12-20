import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Main} from "./components/Main";

export const App = () =>  {
  return (
    <BrowserRouter>
      <div className="container">
        <Main /> 
      </div>
    </BrowserRouter>

  );
}
