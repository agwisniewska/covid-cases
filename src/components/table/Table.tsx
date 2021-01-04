import React, { PropsWithChildren } from 'react';
import { Pagination, TableHeader, TableFooter, TableBody } from '../../components';
import {TableBodyProps} from "react-table";
import {default as LayoutTable} from 'react-bootstrap/Table';

const Table = ({children}: PropsWithChildren<{}>) => {
  return (
      <LayoutTable striped bordered hover>
        {children}
      </LayoutTable>
  )
}

Table.Header = TableHeader;
Table.Footer = TableFooter;
Table.Body = TableBody;
Table.Pagination = Pagination;

export default Table;
