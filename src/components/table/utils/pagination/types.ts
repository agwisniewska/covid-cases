import {UsePaginationInstanceProps, UsePaginationState} from 'react-table';

export interface PaginationButtonProps {
  disabled: boolean;
  direction?: string;
  onClick: () => void;
}

export type PaginationProps = Pick<UsePaginationInstanceProps<{}>,
'previousPage' |
'nextPage' |
'pageOptions' |
'canPreviousPage' |
'canNextPage'
> & Pick<UsePaginationState<{}>,
'pageIndex'
> & {
  //  TODO: Verify if custom props are needed!
}

export enum DIRECTION {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}