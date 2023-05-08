import {API_BASE} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use(async config => {
  // const token = await AsyncStorage.getItem('@token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

api.interceptors.response.use(async response => {
  // if (response.status === 401) {
  //  try refresh token if not remove loggof user
  //  await AsyncStorage.removeItem('@token');
  // }
  return response;
});
