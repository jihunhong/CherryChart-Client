import GoogleAnalytics from '@atoms/GoogleAnalytics';
import wrapper from '@store/configureStore';
import 'antd/dist/antd.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Player = dynamic(() => import('@organisms/Player'));

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <title>Cherry Chart</title>
        <link rel="canonical" href="https://cherrychart.com" />
      </Head>
      <GoogleAnalytics />
      {getLayout(<Component {...pageProps} />)}
      <Player />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
