import {useState, useReducer, useEffect} from "react";
import axios from 'axios';

enum STATUS {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

//  TODO: Verify that interface
interface Action {
  type: STATUS;
  payload?: object;
}

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

export const useDataApi = (initialApi: string, initialData: unknown) => {
  const [url, setUrl] = useState(initialApi);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: STATUS.INIT });

      try {

        const result = await axios.get(url, {
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

  }, [url]);
 
  return [state, setUrl];
}