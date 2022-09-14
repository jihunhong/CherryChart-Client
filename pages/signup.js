import { loadArtists } from '@actions/artistActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import SignUpPage from '@Template/signup';

const SignUp = () => {
  return <SignUpPage />;
};

SignUp.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadArtists({
      site: 'melon',
    }),
  );
});

export default SignUp;
