import React, { Fragment, useCallback, useEffect, useState} from 'react';
import { ButtonToNavigate } from '../../components/shared';
import { ReactTable } from '../../components/table';
import {useCasesDispatch, useCasesState} from "../../context";
import {columns} from './index';
import {STATUS} from '../../context';

export const CovidCasesTable = () => {
  const {data, isError, isLoading}  = useCasesState();
  const dispatch = useCasesDispatch();

  const memoColumns = React.useMemo(() => columns, []);

  const memoData =  React.useMemo(() => data, [data]);

  const [visibleRecords, setVisibleRecords] = useState([])

  // TODO: Remove any
 const updateState = (records: any[]) => {
    console.log('filter', records);
    dispatch({ 
      type: STATUS.SUCCESS,
      payload: {
        Countries: records
      }
    })
 };

  return (
  <Fragment>
    <ButtonToNavigate path="/chart" title="View Chart" />
      {/*  TODO: Move isLoading, isError to something like error boundary */}
      {isLoading && <span> Loading... </span>}
      {isError && <span> An error occurred. Try to refresh browser </span>}
      {/*  @ts-ignore */}
      {memoData?.length > 0 && <ReactTable columns={memoColumns} data={memoData} setTableVisibleRecords={setVisibleRecords} />}
  </Fragment>
  )
  }