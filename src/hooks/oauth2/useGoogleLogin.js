import { loadGoogleProfile, loadMyYoutubePlaylist } from '@actions/userActions';
import { API_URL } from '@config/';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const router = useRouter();
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
          dispatch(loadGoogleProfile());
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (me) {
      dispatch(loadMyYoutubePlaylist())
        .unwrap()
        .then(() => {
          router.back();
        });
    }
  }, [me]);

  return [null, handleLogin];
};

export default useGoogleLogin;
