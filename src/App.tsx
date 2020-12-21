import React from 'react';
import { HashRouter } from 'react-router-dom';
import {CovidApp} from "./components/covid-app";
import { CasesProvider, SearchProvider } from './context';

export const App = () =>  {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <CasesProvider>
          <SearchProvider>
           <CovidApp /> 
          </SearchProvider>
        </CasesProvider>
      </div>
    </HashRouter>

  );
}
