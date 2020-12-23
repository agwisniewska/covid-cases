import {BASE_URL} from "../services";
import axios from 'axios';

const get = (url: string) => {
  return axios.get(`${BASE_URL}/${url}`);
}

// if need for headers etc.

const headers = {
  'Authorization': 'X-Access-Token5cf9dfd5-3449-485e-b5ae-70a60e997864'
}

const post = (url: string, data: unknown) => {
  return axios(`${BASE_URL}/${url}`, {
      method: 'POST',
      headers,
      data,
  });
}

export {post, get};