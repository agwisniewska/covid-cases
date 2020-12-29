import React from 'react';
import {Search} from '../../..';
import { UseFiltersColumnProps } from 'react-table';
import { useSearchState } from '../../../../context';
import {useDidUpdateEffect} from "../../../../hooks";

interface FilteredColumn {
  column: UseFiltersColumnProps<{}>,
}
export const CountryColumnFilter = ({
  column: { setFilter }
}: FilteredColumn) => {
  const phrase = useSearchState();
  useDidUpdateEffect(setFilter, phrase)
  return (
    <Search />
    )
}


