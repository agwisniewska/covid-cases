import React from 'react';
import { TableInstance } from 'react-table';
import { CountryColumnFilter } from '../../components';
import {getTotalCount} from "./index";

export const columns = [
  {
    Header: 'Country',
    accessor: 'Country',
    Filter: CountryColumnFilter,
  },
  {
    Header: 'Deaths',
    accessor: 'NewDeaths',
    disableFilters: true,


    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewDeaths'), [info.filteredRows])
      return <><b>Total:</b> <div>{total}</div></>
    },
  },
  {
    Header: 'Recovered',
    accessor: 'NewRecovered',
    disableFilters: true,

    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewRecovered'), [info.filteredRows])
      return <><b>Total:</b> <div>{total}</div></>
    }

  }, {
    Header: 'New Cases',
    accessor: 'NewConfirmed',
    disableFilters: true,


    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewConfirmed'), [info.filteredRows])
      return <><b>Total:</b> <div>{total}</div></>
    }
  }
];