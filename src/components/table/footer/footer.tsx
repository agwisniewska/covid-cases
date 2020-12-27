import React from 'react';
import { UseTableInstanceProps } from 'react-table';

type FooterProps = Pick<UseTableInstanceProps<{}>, 'footerGroups'>;

export const TableFooter = ({footerGroups}: FooterProps) => {
  return ( 
  <tfoot>
    {footerGroups.map(group => ( 
      <tr {...group.getFooterGroupProps()}>
        {group.headers.map(column => (
          <td {...column.getFooterProps()}>{column.render('Footer')}</td>
        ))}
      </tr>
    ))}
  </tfoot>)
}