import React, { FunctionComponent } from 'react';
import {PaginationProps, PaginationButton} from '../../../../components';
import { DIRECTION } from './types';

export const Pagination: FunctionComponent<Omit<PaginationProps, 'page'>> = (props: Omit<PaginationProps, 'page'>) => {
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