import {TableInstance, Column, UsePaginationState} from 'react-table';
import { ChartData, ButtonProps, PaginationProps, BodyProps  } from '../../components';

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

export type PropGetter<D extends object, P> = (props?: D) => P

type BodyPropGetter<D extends object> = PropGetter<D, BodyProps>;
type PaginationPropGetter<D extends object> = PropGetter<D, PaginationProps>;
type ButtonPropGetter<D extends object> = PropGetter<D, ButtonProps>;

export type getPaginationProps = (propGetter?: PaginationPropGetter<{}>) => PaginationProps
export type getButtonProps = (propGetter?: ButtonPropGetter<{}>) => ButtonProps;
export type getBodyProps = (propGetter?: BodyPropGetter<{}>) => BodyProps;