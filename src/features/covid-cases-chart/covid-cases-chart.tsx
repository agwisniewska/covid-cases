import React, {useEffect, Fragment} from 'react';
import {datasets} from './index';
import {CovidCase} from "../index";
import {useCasesState} from "../../context";
import {Chart} from '../../components/chart';
import {ButtonToNavigate} from "../../components/shared/button-to-navigate";

export const CovidCasesChart = () => {
  const {filteredData, isError, isLoading}  = useCasesState();

  useEffect(() => {

    //  TODO: Fix updating datasets automatically
                //  @ts-ignore
    datasets.labels = filteredData?.map((covidCase: CovidCase) => covidCase.Country)

    const covidCaes = filteredData?.forEach((covidCase: CovidCase) => {
            //  @ts-ignore
      datasets.datasets[0].data.push(covidCase['NewConfirmed']);
            //  @ts-ignore
      datasets.datasets[1].data.push(covidCase['NewDeaths']);
            //  @ts-ignore
      datasets.datasets[2].data.push(covidCase['NewRecovered']);
    })
  }, [filteredData])

  return (<Fragment>
            <ButtonToNavigate title="View Table" path="/" />
            {/*  TODO: Move isLoading, isError to something like error boundary */}
            {isLoading && <span> Loading... </span>}
            {isError && <span> An error occurred. Try to refresh browser </span>}
            {filteredData && <Chart data={datasets}/>}

  </Fragment>)
}