import React, {createContext, useContext, useReducer, useEffect} from 'react';
import {get} from '../services';
import {Action, STATUS} from '../context';
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
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
    filteredData: []
  });

  useEffect(() => {
    let didCancel = false;

    const fetchCases = async () => {
      dispatch({ type: STATUS.INIT });

      try {

        const result = await get(URLS.SUMMARY)

        if (!didCancel) {
          dispatch({ type: STATUS.SUCCESS, payload: result.data });
        }

      } catch (error) {
        if (!didCancel) {
          dispatch({ type: STATUS.FAILURE, isError: error });

        }
      }
    };
    fetchCases();

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