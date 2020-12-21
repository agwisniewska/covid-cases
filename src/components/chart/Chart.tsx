import React, { FunctionComponent } from 'react';
import {Bar, LinearComponentProps} from 'react-chartjs-2';

export const Chart: FunctionComponent<LinearComponentProps> = ({data}: LinearComponentProps) => {

  return (
      <Bar
        data={data}
        width={1000}
        height={1000}
        options={{ maintainAspectRatio: false, responsive: true }}
    />
 )
}