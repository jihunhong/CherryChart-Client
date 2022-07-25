import AppLayout from '@Layout/AppLayout';
import LoginPage from '@Template/login';
import { loadArtists } from '@actions/artistActions';
import wrapper from '@store/configureStore';

const Login = () => {
  return <LoginPage />;
};

Login.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadArtists({
      site: 'melon'
    })
  )
});

export default Login;
