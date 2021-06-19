import Player from '@organisms/Player';
import wrapper from '@store/configureStore';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page);
  const store = useStore(state => state);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Cherry Chart</title>
      </Head>
      <PersistGate persistor={store.__persistor} loading={null}>
        {getLayout(<Component {...pageProps} />)}
      </PersistGate>
      <Player />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
