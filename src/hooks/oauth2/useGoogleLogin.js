import { loadGoogleProfile } from '@actions/userActions';
import { API_URL } from '@config/';
import { useDispatch } from 'react-redux';

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    let timer = null;
    const loginWindow = window.open(`${API_URL}/api/oauth/google/login`, '_blank', 'width=500,height=600');
    if (loginWindow) {
      timer = setInterval(() => {
        if (loginWindow.closed) {
          dispatch(loadGoogleProfile());
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  return [null, handleLogin];
};

export default useGoogleLogin;
