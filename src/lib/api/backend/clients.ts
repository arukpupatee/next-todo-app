import axios, { AxiosInstance } from 'axios';
import { AuthenticationApi } from './authentication';

export * from './authentication';

export const apiClient: AxiosInstance = axios.create({
  baseURL: '/api',
});

export const api = {
  authentication: new AuthenticationApi(apiClient),
};
