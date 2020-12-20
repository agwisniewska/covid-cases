import React from 'react';
import {TableContainer} from './table';
import { ChartContainer } from './chart';
import {Switch, Route} from "react-router-dom";

export const Main = () => {

  return (
    <Switch>
      <Route exact path='/' component={TableContainer}/>
      <Route path='/chart' component={ChartContainer}/>
  </Switch>
  )
}
