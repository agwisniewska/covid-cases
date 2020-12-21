import React, {Fragment, FunctionComponent} from 'react';
import {PaginationButtonProps} from '../pagination';
import { DIRECTION } from './types';

export const PaginationButton: FunctionComponent<PaginationButtonProps> = ({disabled, direction, onClick, children}) => {
  return (
  <button type="button" disabled={disabled} onClick={onClick}>
      {!children && direction ===  DIRECTION.LEFT ? '<' : '>'}
      {children && <Fragment>{children}</Fragment>}
  </button>
  )
}