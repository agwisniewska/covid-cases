import React, {createContext, useContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import {Action, STATUS} from '.';
import {URLS} from '../services';
import {State, Dispatch, CasesProviderProps} from '.';

const assertUnreachable = (): never => {
  throw new Error();
}

const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case STATUS.INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case STATUS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action?.payload?.Countries,
        filteredData: action?.payload?.Countries,
      };
    case STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
  assertUnreachable();
};

const CasesStateContext = createContext<State | undefined>(undefined);
const CasesDispatchContext = createContext<Dispatch | undefined>(undefined);

const CasesProvider = ({children}: CasesProviderProps) => {
  //  @ts-ignore
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
    filteredData: []
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
        //  @ts-ignore

      dispatch({ type: STATUS.INIT });

      try {

        const result = await axios.get(URLS.SUMMARY, {
          headers: {
            'Authorization': 'X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864'
           }
          }
        );

        if (!didCancel) {
            //  @ts-ignore

          dispatch({ type: STATUS.SUCCESS, payload: result.data });
        }

      } catch (error) {
        if (!didCancel) {
            //  @ts-ignore

          dispatch({ type: STATUS.FAILURE });

        }
      }
    };
 
    fetchData();

  }, []);


  return (
    <CasesStateContext.Provider value={state}>
      <CasesDispatchContext.Provider value={dispatch}>
        {children}
      </CasesDispatchContext.Provider>
    </CasesStateContext.Provider>
  )
}

const useCasesState = () => {
  const context = useContext(CasesStateContext)
  if (context == null) {
    throw new Error('useCasesState must be used within a SearchProvider')
  }
  return context
}

const useCasesDispatch = () => {
  const context = useContext(CasesDispatchContext)
  if (context == null) {
    throw new Error('useCasesDispatch must be used within a SearchProvider')
  }
  return context
}


export {useCasesDispatch, useCasesState, CasesProvider}