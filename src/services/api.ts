/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getTokenFromCookies } from '@/utils/cookies';
import axios from 'axios';
import { deleteCookie } from 'cookies-next';

export const baseURL = process.env.NEXT_PUBLIC_API || '';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async config => {
    const cookieAccessToken = getTokenFromCookies();
    if (cookieAccessToken) {
      config.headers!.Authorization = `Bearer ${cookieAccessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;

/*
export async function refreshAccessToken() {
  try {
    const credentials = localStorage.getItem('@MultCapWeb:refreshToken');

    if (typeof credentials === 'string') {
      const { data } = await api.put('your-refresh-token-url', {
        refresh_token: credentials,
      });
      localStorage.setItem('@MultCapWeb:accessToken', data.access_token);
      localStorage.setItem('@MultCapWeb:refreshToken', data.refresh_token);
      return data?.access_token;
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = '/';
  }

  localStorage.clear();
  window.location.href = '/';
}

*/
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;

      if (window) {
        localStorage.clear();
        window.location.href = '/';
      }

      deleteCookie('multcap-web: jwt');

      /* const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`; */
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);
