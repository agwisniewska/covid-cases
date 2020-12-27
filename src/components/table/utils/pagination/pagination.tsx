import React from 'react';
import {PaginationProps, PaginationButton, DIRECTION} from '../../../../components';

export const Pagination = (props: PaginationProps) => {
  const {previousPage, pageOptions, canPreviousPage, canNextPage, pageIndex, nextPage} = props;
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