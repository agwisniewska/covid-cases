import React, {Fragment } from 'react';
import {useTable, useFilters, usePagination, Row, Cell, UseTableOptions, UseFiltersColumnProps} from 'react-table';
import {useSearchState} from "../../context/SearchContext";
import {DefaultColumnFilter} from './utils/filters';


export const Table = ({columns, data }: UseTableOptions<any>) => {
  const search = useSearchState();

  const defaultColumn = React.useMemo(
    () => ({
      Header: '',
      Filter: DefaultColumnFilter,
    }),
    []
  )

  //  useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    //@ts-ignore
    page,
        //@ts-ignore

    canPreviousPage,
        //@ts-ignore

    canNextPage,
            //@ts-ignore

    pageOptions,
            //@ts-ignore

    nextPage,
            //@ts-ignore

    previousPage,
            //@ts-ignore

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 , pageSize: 20},


    } as UseTableOptions<any>,
    useFilters,
    usePagination
  )
  
  // Render the UI for your table
  return (
    <Fragment>
    <table className="table"
    {...getTableProps()}>
      <thead className="thead-light">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
             <th scope="col" {...column.getHeaderProps()}>
             {column.render('Header')}
             {/* Render the columns filter UI */}

    
             <div>{(column as unknown as UseFiltersColumnProps<any>).canFilter && column.Header === 'Country' ? column.render('Filter') : null}</div>
           </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
          {page.map((row: Row<object>, i: number) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell: Cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
          })}
      </tbody>

       <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td {...column.getFooterProps()}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>

    <div className="pagination">
       
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
       
    </div>
    </Fragment>
  )
}
