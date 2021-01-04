import React, {FunctionComponent, useEffect, Fragment } from 'react';
import { MODE, Button, Chart, TableChartContainerProps, ButtonProps } from '../../components';
import {CovidCase, CaseType} from '../../features';
import {useModeState, useModeDispatch } from '../../context';
import {useTable, usePagination, useFilters, PropGetter, TableBodyProps } from 'react-table';
import Table from "../../components/table/table";
import { PaginationProps } from '../table/utils';

const prepareLabels = (originals: CovidCase[]) => {
  return originals.map(((covidCase: CovidCase) => covidCase.Country));
}

export const TableChartContainer: FunctionComponent<TableChartContainerProps> = ({columns, chart, data, initialState}: TableChartContainerProps) => {
  const mode = useModeState();
  const modeDispatch = useModeDispatch();

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
      initialState: { ...initialState || null },
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

  const getPaginationProps = ({...otherProps}) => ({
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    pageIndex,
    pageSize,
    ...otherProps

  });

  const getButtonProps = ({...otherProps}) => ({
    title: mode === MODE.TABLE ? 'Chart view' : 'Table view',
    onClick: modeDispatch,
    ...otherProps
  });

  const getBodyProps = ({...otherProps}) => ({
    prepareRow,
    getTableBodyProps,
    page,
    ...otherProps

  })

  //  TODO: Add prop getter proper types to get rid of passing empty object

  return (
    <Fragment>
      <Button {...getButtonProps({})} />
       {(mode === MODE.CHART) && <Chart data={chart}/>}
       {( mode === MODE.TABLE )  && (
       <Table getTableProps={getTableProps}>
              <Table.Header headerGroups={headerGroups} />
              <Table.Body {...getBodyProps({})} />
              <Table.Footer footerGroups={footerGroups} />
              <Table.Pagination {...getPaginationProps({})} />
        </Table>)}
    </Fragment>
  )
}
