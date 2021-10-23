import { pageview } from '@lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useGoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      if (process.env.NODE_ENV !== 'development') {
        pageview(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useGoogleAnalytics;
