import React, {useEffect, Fragment} from 'react';
import {datasets} from './index';
import {CountryData} from "../index";
import {useCasesState} from "../../context";
import {Chart} from '../../components/chart';
import {ButtonToNavigate} from "../../components/shared/button-to-navigate";

export const CovidCasesChart = () => {
  const {data, isError, isLoading}  = useCasesState();

  useEffect(() => {
    if (data && data['Countries'] && data['Countries'].length > 0) {
      const countries = data['Countries'].map((country: CountryData) => country.Country);

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

  return (<Fragment>
            <ButtonToNavigate title="View Table" path="/" />
            <Chart data={datasets}/>

  </Fragment>)
}