import { loadArtists } from '@actions/artistActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import LoginPage from '@Template/login';

const Login = () => {
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
