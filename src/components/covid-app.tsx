import React from 'react';
import {Switch, Route} from "react-router-dom";
import { CovidCasesChart, CovidCasesTable } from '../features';

export const CovidApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={CovidCasesTable}/>
      <Route path='/table' component={CovidCasesTable} />
      <Route path='/chart' component={CovidCasesChart}/>
  </Switch>
  )
}
