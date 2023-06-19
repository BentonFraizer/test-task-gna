import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://649030a01e6aa71680cac491.mockapi.io/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
