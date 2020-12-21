import {TableInstance, Row, ColumnGroup} from 'react-table';

export type TableProps  = Pick<TableInstance,
'data' 
> & {
  setTableVisibleRecords: (records: Array<Row<any>>) => void,
  // TODO: Fix type any
  columns: any[]

}


export interface TableContainerProps extends TableProps {}