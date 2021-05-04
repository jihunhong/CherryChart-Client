import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import wrapper from '@store/configureStore';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Cherry Chart</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
