import React from 'react';
import { HashRouter } from 'react-router-dom';
import {Main} from "./components/Main";

export const App = () =>  {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Main /> 
      </div>
    </HashRouter>

  );
}
