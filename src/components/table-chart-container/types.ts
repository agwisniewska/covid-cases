import {TableInstance, Column, UsePaginationState} from 'react-table';
import { ChartData } from '../../components';

export type TableChartContainerProps = Pick<TableInstance,
'data'
> & {
  columns: Array<Column<{}>>,
  chart: ChartData,
  initialState?: Pick<UsePaginationState<{}>, 'pageSize' |  'pageIndex'>,
}

export enum MODE {
  TABLE = 'TABLE',
  CHART = 'CHART'
}