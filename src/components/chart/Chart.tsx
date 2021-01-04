import React, { FunctionComponent } from 'react';
import {Bar, LinearComponentProps} from 'react-chartjs-2';

const SIZE = {
  WIDTH: 1000,
  HEIGHT: 1000
}
export const Chart: FunctionComponent<LinearComponentProps> = ({data}: LinearComponentProps) => (
      <Bar
        data={data}
        width={SIZE.WIDTH}
        height={SIZE.HEIGHT}
    />
);