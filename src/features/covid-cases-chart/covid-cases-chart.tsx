import React, {useEffect, Fragment} from 'react';
import {datasets} from './index';
import {CountryData} from "../index";
import {useCasesState} from "../../context";
import {Chart} from '../../components/chart';
import {ButtonToNavigate} from "../../components/shared/button-to-navigate";

export const CovidCasesChart = () => {
  const {data, isError, isLoading}  = useCasesState();

  useEffect(() => {
    datasets.labels = data?.Countries?.map((covidCase: CountryData) => covidCase.Country)

    const covidCaes = data?.Countries?.forEach((covidCase: CountryData) => {
            //  @ts-ignore
      datasets.datasets[0].data.push(covidCase['NewConfirmed']);
            //  @ts-ignore
      datasets.datasets[1].data.push(covidCase['NewDeaths']);
            //  @ts-ignore
      datasets.datasets[2].data.push(covidCase['NewRecovered']);
    })
  }, [data])

  return (<Fragment>
            <ButtonToNavigate title="View Table" path="/" />
            <Chart data={datasets}/>

  </Fragment>)
}