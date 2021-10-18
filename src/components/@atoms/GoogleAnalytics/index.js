import { GA_TRACKING_ID } from '@config/settings';
import useGoogleAnalytics from '@hooks/util/useGoogleAnalytics';
import Head from 'next/head';

const GoogleAnalytics = () => {
  useGoogleAnalytics();
  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
         `,
        }}
      />
    </Head>
  );
};
export default GoogleAnalytics;
