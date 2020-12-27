import React, { Fragment, PropsWithChildren } from 'react';
import { TableProps, Pagination, TableHeader, TableFooter, TableBody } from '../../components';
import {default as LayoutTable} from 'react-bootstrap/Table';

const Table = (props: PropsWithChildren<TableProps>) => {
   const {
    getTableProps,
  } = props;

  return (
    <Fragment>
      <LayoutTable striped bordered hover {...getTableProps()}>
        {props.children}
      </LayoutTable>
    </Fragment>
  )
} 

Table.Header = TableHeader;
Table.Footer = TableFooter;
Table.Body = TableBody;
Table.Pagination = Pagination;

export default Table;
