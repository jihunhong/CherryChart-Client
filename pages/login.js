import AppLayout from '@Layout/AppLayout';
import LoginPage from '@Template/login';

const Login = () => {
  return <LoginPage />;
};

Login.getLayout = page => <AppLayout>{page}</AppLayout>;

export default Login;
