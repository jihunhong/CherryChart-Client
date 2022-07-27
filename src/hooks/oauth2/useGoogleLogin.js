import { loadGoogleProfile, loadMyYoutubePlaylist } from '@actions/userActions';
import { CLIENT_ID } from '@config/settings';
import useScript from '@hooks/util/useScript';
import { useDebugValue, useState } from 'react';
import { useDispatch } from 'react-redux';

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const [client, setClient] = useState(null);
  useScript('https://accounts.google.com/gsi/client', () => {
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope:
        'https://www.googleapis.com/auth/userinfo.profile \
          https://www.googleapis.com/auth/userinfo.email \
          https://www.googleapis.com/auth/youtube.readonly \
          https://www.googleapis.com/auth/youtube.force-ssl \
          https://www.googleapis.com/auth/youtubepartner',
      callback: async res => {
        dispatch(loadGoogleProfile(res.access_token));
        dispatch(loadMyYoutubePlaylist(res.access_token));
      },
    });
    if (!client) setClient(tokenClient);
  });

  const requestToken = e => {
    client.requestAccessToken();
  };

  useDebugValue(client);
  return [client, requestToken];
};

export default useGoogleLogin;
