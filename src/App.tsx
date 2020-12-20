import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Main} from "./components/Main";

export const App = () =>  {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Main /> 
      </div>
    </BrowserRouter>

  );
}
