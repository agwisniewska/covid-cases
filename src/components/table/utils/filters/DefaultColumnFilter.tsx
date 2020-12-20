import React, { useEffect } from 'react';
import {Search} from '../../../search/Search';
import { UseFiltersColumnProps } from 'react-table';
import { useSearchState } from '../../../../context/SearchContext';

interface FilteredColumn {
  column: UseFiltersColumnProps<any>
}
export const DefaultColumnFilter = ({
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


