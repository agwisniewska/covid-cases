export enum STATUS {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

//  TODO: Verify that interface
export interface Action {
  type: STATUS;
  payload?: object;
}