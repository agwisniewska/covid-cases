import React from 'react';
import { TableInstance } from 'react-table';
import {getTotalCount} from "./index";

export const columns = [
  {
    Header: 'Country',
    accessor: 'Country',
  },
  {
    Header: 'Deaths',
    accessor: 'NewDeaths',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewDeaths'), [info.filteredRows])
      return <>Total: <div>{total}</div></>
    },
  },
  {
    Header: 'Recovered',
    accessor: 'NewRecovered',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewRecovered'), [info.filteredRows])
      return <>Total: <div>{total}</div></>
    }

  }, {
    Header: 'New Cases',
    accessor: 'NewConfirmed',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewConfirmed'), [info.filteredRows])
      return <>Total: <div>{total}</div></>
    }
  }
];