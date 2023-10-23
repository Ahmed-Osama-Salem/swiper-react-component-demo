import { setCookie } from 'cookies-next';

import { userToken } from './getCookies';

const xz = async (req: any, res: any) => {
  const checkUser = userToken(req, res);
  if (!checkUser) {
    setCookie('error', 'You have to login', { req, res });
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  return { props: {} };
};

export default xz;
