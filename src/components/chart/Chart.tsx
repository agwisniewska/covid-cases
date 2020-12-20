import React, { FunctionComponent } from 'react';
import {Bar, LinearComponentProps} from 'react-chartjs-2';
// import { useDataApi } from '../../hooks';

// TODO: Prepare util for data
// import {covidSummaryUrl} from '../table/TableContainer';

export const Chart: FunctionComponent<LinearComponentProps> = ({data: dataSets}: LinearComponentProps) => {
  // const [{data, isError, isLoading}] = useDataApi(covidSummaryUrl, [])
 
  return (
      <Bar
        data={dataSets}
        width={1000}
        height={1000}
        options={{ maintainAspectRatio: false, responsive: true }}
    />
 )
}