import { getCookie } from 'cookies-next';

export function userToken(req: any, res: any) {
  const token = getCookie('token', { req, res });
  return token;
}
export function countryCode(req: any, res: any) {
  const code = getCookie('country_code', { req, res });
  return code;
}
