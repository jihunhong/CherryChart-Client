import { loadMyProfile } from '@actions/userActions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetchProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(loadMyProfile());
  }, []);
  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(loadMyProfile());
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
};

export default useFetchProfile;
