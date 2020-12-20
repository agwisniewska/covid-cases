import React, { FunctionComponent, Fragment } from 'react';
import {Table} from './Table';
import { useDataApi } from '../../hooks/useApi';
import { TableInstance } from 'react-table';
import {SearchProvider} from '../../context';
import {useHistory} from 'react-router-dom';

export const covidSummaryUrl = 'https://api.covid19api.com/summary';

interface ButtonToNavigate {
  title: string;
  path: string;
}

// TODO: Move to separated file 
export const ButtonToNavigate = ({ title, path }: ButtonToNavigate) => {

  const history = useHistory();

  return (
    <button
      type="button"
      onClick={() => history.push(path)}>
      {title}
    </button>
  );
}

const getTotalCount = (info: TableInstance, key: string): number => {
  return info.rows.reduce((sum, row) => row.values[key] + sum, 0);
}

const columnsConfig = [
  {
    Header: 'Country',
    accessor: 'Country',
  },
  {
    Header: 'Deaths',
    accessor: 'NewDeaths',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewDeaths'), [info.rows])
      return <>Total: <div>{total}</div></>
    },
  },
  {
    Header: 'Recovered',
    accessor: 'NewRecovered',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewRecovered'), [info.rows])
      return <>Total: <div>{total}</div></>
    }

  }, {
    Header: 'New Cases',
    accessor: 'NewConfirmed',
    Footer: (info: TableInstance) => {
      const total = React.useMemo(() => getTotalCount(info, 'NewConfirmed'), [info.rows])
      return <>Total: <div>{total}</div></>
    }
  }
];

export const TableContainer: FunctionComponent = () => {



  const[{data, isError, isLoading}] = useDataApi(covidSummaryUrl, null)
 
  const columns = React.useMemo(() => columnsConfig, []);

  const rows =  React.useMemo(() => {
    if (data) {
      return data['Countries']
    }
  }, [data]);


  return (
    <SearchProvider>
      <ButtonToNavigate title="View Chart" path="/chart" />
      {isLoading && <div> Loading ... </div>}
      {isError &&  <div>An error occurred. Try to refresh the browser. </div> }
      {rows && <Table columns={columns} data={rows}/>}
    </SearchProvider> 
  )
}