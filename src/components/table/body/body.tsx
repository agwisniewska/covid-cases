import { UsePaginationInstanceProps, UsePaginationState, UseTableInstanceProps } from 'react-table';

type BodyProps = Pick<UseTableInstanceProps<{}>, 'getTableBodyProps' | 'prepareRow'> & Pick<UsePaginationInstanceProps<{}>, 'page'>;


export const TableBody = ({getTableBodyProps, page, prepareRow}: BodyProps) => {
  return (
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
  )
}