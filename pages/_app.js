import Player from '@organisms/Player';
import wrapper from '@store/configureStore';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Cherry Chart</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <Player />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
