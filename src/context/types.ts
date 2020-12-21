import { CovidCase } from '../features';

export enum STATUS {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export type Action =
 | { type: STATUS.INIT }
 | { type: STATUS.SUCCESS, payload: CovidPayloadData }
 | { type: STATUS.FAILURE, isError: string };
export type Dispatch = (action: Action) => void;
export type CasesProviderProps = {children: React.ReactNode};

export interface CovidPayloadData {
  Countries: CovidCase[],
}

export interface State {
  isLoading: boolean;
  isError: boolean;
  data: CovidCase[];
  filteredData: CovidCase[];
}

