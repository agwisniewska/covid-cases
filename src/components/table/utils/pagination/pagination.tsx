import React, { FunctionComponent } from 'react';
import {PaginationProps} from '../pagination';
import { PaginationButton } from './button';
import { DIRECTION } from './types';

export const Pagination: FunctionComponent<PaginationProps> = ({
  previousPage,
  nextPage,
  pageOptions,
  canNextPage,
  canPreviousPage,
  pageIndex,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <PaginationButton onClick={previousPage} disabled={!canPreviousPage} direction={DIRECTION.LEFT}/>
      <PaginationButton onClick={nextPage} disabled={!canNextPage} direction={DIRECTION.RIGHT} />
       <span>
         Page
         <strong>
           {pageIndex + 1} of {pageOptions.length}
         </strong>{' '}
       </span>
    </div>
  )
}