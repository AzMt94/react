import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5002',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });