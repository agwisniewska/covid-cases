import React, {createContext, useContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import {Action, STATUS} from '../context';
import {URLS} from '../services';
import { CountryData } from '../features';

type Dispatch = (state: any) => void
type CasesProviderProps = {children: React.ReactNode};

//  TODO: Change any to types!
const dataFetchReducer = (state: any, action: Action) => {
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
        data: action.payload,
      };
    case STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:

    //  add typescript never function !
      throw new Error();
  }
};


//  TODO: Type data properly
interface State {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

const CasesStateContext = createContext<State | undefined>(undefined);
const CasesDispatchContext = createContext<Dispatch | undefined>(undefined);

const CasesProvider = ({children}: CasesProviderProps) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: STATUS.INIT });

      try {

        const result = await axios.get(URLS.SUMMARY, {
          headers: {
            'Authorization': 'X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864'
           }
          }
        );

        if (!didCancel) {
          dispatch({ type: STATUS.SUCCESS, payload: result.data });
        }

      } catch (error) {
        if (!didCancel) {
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