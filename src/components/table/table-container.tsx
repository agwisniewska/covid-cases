import React, { FunctionComponent, ReactNode, Fragment, PropsWithChildren } from 'react';
import { Column} from 'react-table';
import {Table} from './table';

interface TableContainerProps<D extends object>  {
  columns:  Array<Column<D>>;
  data: D[];
  header?: ReactNode;
}

export const TableContainer: FunctionComponent<TableContainerProps<any>> = (props: TableContainerProps<any>) => {
  const {header, ...tableProps} = props;
  return (
    <Fragment>
      <Table {...tableProps}/>
    </Fragment>
  )
}