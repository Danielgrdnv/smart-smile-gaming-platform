import axios from 'axios';
import { errorHandler, requestHandler, responseHandler } from './interceptors';

export const apiInstance = axios.create({
  baseURL: 'https://api.smart-smile.com/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(requestHandler);
apiInstance.interceptors.response.use(responseHandler, errorHandler, {});