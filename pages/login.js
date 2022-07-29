import AppLayout from '@Layout/AppLayout';
import LoginPage from '@Template/login';
import { loadArtists } from '@actions/artistActions';
import wrapper from '@store/configureStore';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const me = useSelector(state => state.user.me);
  const router = useRouter();
  useEffect(() => {
    if (me) {
      router.push('/chart');
    }
  }, [me]);

  return <LoginPage />;
};

Login.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadArtists({
      site: 'melon',
    }),
  );
});

export default Login;
