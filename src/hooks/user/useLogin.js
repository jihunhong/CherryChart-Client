import { logIn, signUp } from '@actions/userActions';
import { success, error } from '@config/notification';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const useLogin = form => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logIn_loading = useSelector(state => state.user.logIn_loading);
  const handleLogin = async e => {
    e.preventDefault();
    try {
      await dispatch(
        logIn({
          email: form?.email?.value,
          password: form?.password?.value,
        }),
      ).unwrap();
      success({
        message: '로그인 완료',
      });
      router.push(router.query?.redirect || '/');
    } catch (err) {
      error({
        message: err,
      });
    }
  };

  return [logIn_loading, handleLogin];
};

export default useLogin;
