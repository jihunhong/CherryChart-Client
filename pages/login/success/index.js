import { useEffect } from 'react';

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 0);
  });
  return <></>;
};

export default LoginSuccess;
