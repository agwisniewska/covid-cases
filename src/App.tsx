import React from 'react';
import { HashRouter } from 'react-router-dom';
import {CovidApp} from "./components/covid-app";
import { CasesProvider } from './context';

export const App = () =>  {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <CasesProvider>
          <CovidApp /> 
        </CasesProvider>
      </div>
    </HashRouter>

  );
}
