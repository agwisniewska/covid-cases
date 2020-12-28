import React from 'react';
import {UseTableInstanceProps} from 'react-table';
import {FilterColumn} from "../../../components";

type HeaderProps = Pick<UseTableInstanceProps<{}>, 'headerGroups'> & {
  className?: string
}

export const TableHeader = ({headerGroups}: HeaderProps) => {
  
  return (
    <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>
              {column.render('Header')}
              <FilterColumn {...column} />
          </th>
        ))}
      </tr>
    ))}
  </thead>)
}