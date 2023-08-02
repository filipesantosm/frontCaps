import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export const addTokenToCookies = (token: string) => {
  setCookie('multcap-web: jwt', token);
};

export const getTokenFromCookies = () => {
  return getCookie('multcap-web: jwt');
};

export const clearTokenCookie = () => {
  deleteCookie('multcap-web: jwt');
};
