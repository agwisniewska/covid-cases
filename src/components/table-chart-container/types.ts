import {TableInstance, Column} from 'react-table';
import { ChartData } from '../../components';

export type TableChartContainerProps = Pick<TableInstance,
'data'
> & {
  columns: Array<Column<{}>>,
  chart: ChartData,
}