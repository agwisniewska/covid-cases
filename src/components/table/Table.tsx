import React from 'react';
import {useTable, useFilters, usePagination, Row, Cell } from 'react-table';
import { Pagination} from './utils/pagination';
import {DefaultColumnFilter} from './utils/filters';
import { SearchProvider } from '../../context';

export const Table = ({columns, data }: any) => {
  const defaultColumn = React.useMemo(
    () => ({
      Header: '',
      Filter: DefaultColumnFilter,
    }),
    []
  )

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
      defaultColumn,
      initialState: { pageIndex: 0 , pageSize: 20},
    },
    useFilters,
    usePagination,
  )

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
    <SearchProvider>
    <table className="table" {...getTableProps()}>
      <thead className="thead-light">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
             <th scope="col" {...column.getHeaderProps()}>
             {column.render('Header')}
             {/* Render the columns filter UI */}

    
             <div>{column.canFilter && column.Header === 'Country' ? column.render('Filter') : null}</div>
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

      <Pagination {...paginationProps} />
    </SearchProvider>
  )
}
