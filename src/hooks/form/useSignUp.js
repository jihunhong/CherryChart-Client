import { signUp } from '@actions/userActions';
import { success } from '@config/notification';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const useSignUp = form => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(
        signUp({
          email: form?.email?.value,
          password: form?.password?.value,
          nickname: form?.nickname?.value,
        }),
      ).unwrap();
      success({
        message: '가입 완료',
      });
      router.push(router.query?.redirect || '/');
    } catch (err) {
      console.error(err);
    }
  };

  return { onSubmit };
};

export default useSignUp;
