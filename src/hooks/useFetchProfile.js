import { loadGoogleProfile } from '@actions/userActions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetchProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(loadGoogleProfile());
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
};

export default useFetchProfile;
