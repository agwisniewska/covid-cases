import React, {useEffect, Fragment} from 'react';
import {datasets} from './index';
import {CovidCase} from "../index";
import {useCasesState} from "../../context";
import {Chart} from '../../components/chart';
import {ButtonToNavigate} from "../../components/shared/button-to-navigate";

export const CovidCasesChart = () => {
  const {data, isError, isLoading}  = useCasesState();

  useEffect(() => {
                //  @ts-ignore

    datasets.labels = data?.map((covidCase: CovidCase) => covidCase.Country)

    const covidCaes = data?.forEach((covidCase: CovidCase) => {
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