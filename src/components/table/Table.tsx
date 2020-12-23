import React, { Fragment, FunctionComponent } from 'react';
import { Pagination, TableProps} from '../../components';
import {default as LayoutTable} from 'react-bootstrap/Table'

export const Table: FunctionComponent<TableProps> = ({
    getTableProps,
    getTableBodyProps,
    headerGroups, 
    prepareRow,
    footerGroups,
    page,
    ...rest
  }: TableProps) => {
  
  return (
    <Fragment>
      <LayoutTable striped bordered hover {...getTableProps()}>
         {/* TODO: Moved this to Header.tsx file */}
        <thead className="thead-light">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
              <th scope="col" {...column.getHeaderProps()}>
              {column.render('Header')}
                {column.canFilter && column.Header === 'Country'  && <div> {column.render('Filter')}</div>}
            </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
            })}
        </tbody>
        <tfoot>
          {/* TODO: Moved this to Footer.tsx file */}

          {footerGroups.map(group => ( 
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </LayoutTable>
      <Pagination {...rest} />
    </Fragment>
  )
}
