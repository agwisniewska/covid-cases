import React, {Fragment, FunctionComponent} from 'react';
import {PaginationButtonProps} from '../pagination';
import { DIRECTION } from './types';
import Button from 'react-bootstrap/Button';

export const PaginationButton: FunctionComponent<PaginationButtonProps> = ({disabled, direction, onClick, children}) => {
  return (
  <Button variant="link" disabled={disabled} onClick={onClick}>
      {!children && direction ===  DIRECTION.LEFT ? '<' : '>'}
      {children && <Fragment>{children}</Fragment>}
  </Button>
  )
}