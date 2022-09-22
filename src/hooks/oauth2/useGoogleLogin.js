import { loadMyProfile } from '@actions/userActions';
import { API_URL } from '@config/';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    let timer = null;
    const loginWindow = window.open(
      `${API_URL}/api/oauth/google/login`,
      '_blank',
      'width=500,height=600',
    );
    if (loginWindow) {
      timer = setInterval(() => {
        if (loginWindow.closed) {
          dispatch(loadMyProfile());
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  return [handleLogin];
};

export default useGoogleLogin;
