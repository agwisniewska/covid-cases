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
    <div className="d-flex align-items-center justify-content-end">
      
      <PaginationButton onClick={previousPage} disabled={!canPreviousPage} direction={DIRECTION.LEFT}/>
      <span>
         Page
         <strong>
         {' '} {pageIndex + 1} of {pageOptions.length}
         </strong>
       </span>
      <PaginationButton onClick={nextPage} disabled={!canNextPage} direction={DIRECTION.RIGHT} />
       
    </div>
  )
}