import React, { useEffect } from 'react';
import {Search} from '../../..';
import { UseFiltersColumnProps } from 'react-table';
import { useSearchState } from '../../../../context';

interface FilteredColumn {
  column: UseFiltersColumnProps<{}>,
}
export const CountryColumnFilter = ({
  column: { setFilter }
}: FilteredColumn) => {
  const state = useSearchState();

  useEffect(() => {
    setFilter(state);
  }, [state]);

  return (
    <Search />
    )
}


