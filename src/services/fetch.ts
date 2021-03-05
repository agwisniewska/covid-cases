import {BASE_URL} from "../services";
import axios, { AxiosRequestConfig } from 'axios';

const defaultHeaders = {
  'Authorization': 'X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864'
}

const axiosFetch = async (url: string, config?: Omit<AxiosRequestConfig, 'url'>) => {
  return await axios(`${BASE_URL}/${url}`, {
    ...config, 
    headers: {
      ...config?.headers,
      ...defaultHeaders
    }
  });
}

export {axiosFetch};