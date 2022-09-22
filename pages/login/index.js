import { loadArtists } from '@actions/artistActions';
import useLoginPage from '@hooks/user/useLoginPage';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import LoginPage from '@Template/login';

const Login = () => {
  useLoginPage();
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
