import React from "react"
import {ColumnInstance} from 'react-table';

export const FilterColumn = ({ canFilter, render }: ColumnInstance<{}>) => {
  return (
    <>
      {canFilter && render('Filter')}

    </>
);
} 