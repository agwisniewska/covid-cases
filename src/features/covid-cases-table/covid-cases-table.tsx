import React, { Fragment } from 'react';
import { ButtonToNavigate } from '../../components/shared';
import { TableContainer } from '../../components/table';
import {useCasesState} from "../../context";
import {columns} from './index';

export const CovidCasesTable = () => {
  const {data, isError, isLoading}  = useCasesState();

  const memoColumns = React.useMemo(() => columns, []);

  const rows =  React.useMemo(() => data, [data]);

  return (
  <Fragment>
    <ButtonToNavigate path="/chart" title="View Chart" />
    {rows && rows.length > 0 && <TableContainer columns={memoColumns} data={rows} />}
  </Fragment>
  )

}