import React, { Fragment , FunctionComponent } from 'react';
import {useCasesState} from "../../context";
import {columns, datasets} from '../covid-cases';
import {TableChartContainer} from '../../components';

export const CovidCases: FunctionComponent = () => {
  const {data, isError, isLoading}  = useCasesState();
  const memoColumns = React.useMemo(() => columns, []);
  const memoData =  React.useMemo(() => data, [data]);
  
  const initialState =  {
    pageIndex: 0,
    pageSize: 20
  }

  return (
    <Fragment>
      {isLoading && <div>Loading... </div>}
      {isError && <div> An error occured. Please try again later</div>}
      <TableChartContainer columns={memoColumns} chart={datasets} data={memoData} initialState={initialState} />
    </Fragment>

  )
}