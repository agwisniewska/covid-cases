import React, {FunctionComponent, useEffect, Fragment } from 'react';
import { MODE, ModeButton, Chart, TableChartContainerProps } from '../../components';
import {CovidCase, CaseType} from '../../features';
import {useModeState } from '../../context';
import {useTable, usePagination, useFilters } from 'react-table';
import Table from "../../components/table/table";

const initialState =  {
  pageIndex: 0,
  pageSize: 20
}
const prepareLabels = (originals: CovidCase[]) => {
  return originals.map(((covidCase: CovidCase) => covidCase.Country));
}

export const TableChartContainer: FunctionComponent<TableChartContainerProps> = ({columns, chart, data}: TableChartContainerProps) => {
  const mode = useModeState();

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
      initialState: { ...initialState },
    },
    useFilters,
    usePagination,
  )

  useEffect(() => {
    const originals: CovidCase[] = page?.map(record => record.original as CovidCase);
    const cases = [CaseType.NewConfirmed, CaseType.NewDeaths, CaseType.NewRecovered]

    chart!.labels = prepareLabels(originals);

    originals?.forEach((covidCase: CovidCase) => {
      cases.forEach((c, i) => {
        chart?.datasets![i].data!.push(covidCase[c as keyof typeof CaseType]);

      })
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
  };

  return (
    <Fragment>
      <ModeButton />
       {(mode === MODE.CHART) && <Chart data={chart}/>}
       {( mode === MODE.TABLE )  && (
       <Table getTableProps={getTableProps}>
              <Table.Header headerGroups={headerGroups} />
              <Table.Body prepareRow={prepareRow} getTableBodyProps={getTableBodyProps} page={page}/>
              <Table.Footer footerGroups={footerGroups} />
              <Table.Pagination {...paginationProps} />
        </Table>)}
    </Fragment>
  )
}
