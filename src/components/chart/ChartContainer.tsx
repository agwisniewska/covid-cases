import React, { Fragment, useEffect } from 'react';
import { useDataApi } from '../../hooks';
import {Country} from "../search";
import {Chart} from "./index";
import { covidSummaryUrl } from '../table';
import {CountryData} from '../table/types';
import {ButtonToNavigate} from "../table";

export const datasets = {
  labels: [],
  datasets: [
    {
      label: 'New Cases',
      data: [],
      backgroundColor: '#FFFF00',
      width: 5,
    },
    {
      label: 'New Deaths',
      data: [],
      backgroundColor: '#FF0000',
      width: 5,
    },
    {
      label: 'New Recovered',
      data: [],
      backgroundColor: '#74B649',
      width: 5,
    },
  ]
}


export const ChartContainer = () => {
  const [{data, isError, isLoading}] = useDataApi(covidSummaryUrl, []);


  //TODO: Get data outside this container;

  useEffect(() => {
    if (data && data['Countries'] && data['Countries'].length > 0) {
      const countries = data['Countries'].map((country: Country) => country.Country);

      datasets.labels = countries;

      const covidCases = data['Countries'];
      covidCases.forEach((covidCase: CountryData) => {
        //  @ts-ignore
        datasets.datasets[0].data.push(covidCase['NewConfirmed']);
              //  @ts-ignore
  
        datasets.datasets[1].data.push(covidCase['NewDeaths']);
              //  @ts-ignore
  
        datasets.datasets[2].data.push(covidCase['NewRecovered']);
      });
    }
  }, [data])


  console.log('datasets', datasets);
  return (
    <Fragment>
        <ButtonToNavigate title="View Table" path="/" />

        {/*  TODO: Add global isError and isLoading maintenance */}
        {isLoading && <> Loading </> }
        {isError && (<> Something went wrong. Please refresh the browser </>)}
        {data && data['Countries']  && <Chart data={datasets}/>}
    </Fragment>
  )
}