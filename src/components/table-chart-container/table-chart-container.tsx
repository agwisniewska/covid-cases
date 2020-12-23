import React, {FunctionComponent, useEffect, Fragment } from 'react';
import {Table,  MODE, ModeButton, Chart, TableChartContainerProps, getFilterColumn } from '../../components';
import {CovidCase} from '../../features';
import {useModeState, useModeDispatch} from '../../context';
import {useTable, usePagination, useFilters } from 'react-table';

const PAGINATION_CONFIG =  {
  pageIndex: 0,
  pageSize: 20
}

export const TableChartContainer: FunctionComponent<TableChartContainerProps> = ({columns, chart, data}: TableChartContainerProps) => {
  const mode = useModeState();
  const dispatch = useModeDispatch();

  const memoDefaultColumn = React.useMemo(() => (getFilterColumn()), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: memoDefaultColumn,
      initialState: { ...PAGINATION_CONFIG },
    },
    useFilters,
    usePagination,
  )

  useEffect(() => {
    const originals: CovidCase[] = page?.map(record => record.original as CovidCase);
    chart.labels = originals?.map(((covidCase: CovidCase) => covidCase.Country));

    originals?.forEach((covidCase: CovidCase) => {
      chart?.datasets![0].data!.push(covidCase['NewConfirmed']);
      chart?.datasets![1].data!.push(covidCase['NewDeaths']);
      chart?.datasets![2].data!.push(covidCase['NewRecovered']);
  })
  }, [page]);

  const paginationProps = {
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    pageIndex,
    pageSize,
    page
  };

  return (
    <Fragment>
      <ModeButton onClick={dispatch} title={mode === MODE.TABLE ? 'Chart view' : 'Table view'}/>
       {(mode === MODE.CHART) && page && <Chart data={chart}/>}
       {( mode === MODE.TABLE )  && (data?.length > 0) &&  (
       <Table getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
              headerGroups={headerGroups}
              prepareRow={prepareRow}
              footerGroups={footerGroups}
              {...paginationProps}/>
            )}
    </Fragment>
  )
}
