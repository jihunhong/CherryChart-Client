import AppLayout from '@Layout/AppLayout';
import SignUpPage from '@Template/signup';

const SignUp = () => {
  return <SignUpPage />;
};

SignUp.getLayout = page => <AppLayout>{page}</AppLayout>;

export default SignUp;
