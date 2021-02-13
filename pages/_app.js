import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import 'react-multi-carousel/lib/styles.css';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Cherry Chart</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
