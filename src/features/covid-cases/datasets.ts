import {ChartData} from '../../components';

export const datasets: ChartData = {
  labels: [],
  datasets: [
    {
      label: 'New Cases',
      data: [],
      backgroundColor: '#FFFF00',
    },
    {
      label: 'New Deaths',
      data: [],
      backgroundColor: '#FF0000',
    },
    {
      label: 'New Recovered',
      data: [],
      backgroundColor: '#74B649',
    },
  ],
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};