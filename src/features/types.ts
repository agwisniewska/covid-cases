export interface CovidCase {
  Country: string;
  CountryCode: string;
  Date: string;
  [CaseType.NewDeaths]: number;
  [CaseType.NewConfirmed]: number;
  [CaseType.NewRecovered]: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}


export enum CaseType {
  NewDeaths =  'NewDeaths',
  NewRecovered = 'NewRecovered',
  NewConfirmed = 'NewConfirmed'
};
