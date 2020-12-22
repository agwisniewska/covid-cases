import * as chartjs from "chart.js";

export type ChartData = chartjs.ChartData & Pick<chartjs.ChartConfiguration, 'options'>;