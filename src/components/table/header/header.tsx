import React from 'react';
import {UseTableInstanceProps} from 'react-table';

type HeaderProps = Pick<UseTableInstanceProps<{}>, 'headerGroups'> & {
  className?: string
}

export const TableHeader = ({headerGroups}: HeaderProps) => {
  return (
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
</thead>)
}