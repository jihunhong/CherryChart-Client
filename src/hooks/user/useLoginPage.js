import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useLoginPage = () => {
  const me = useSelector(state => state.user.me);
  const router = useRouter();
  useEffect(() => {
    if (me) {
      router.push('/');
    }
  }, [me]);
};

export default useLoginPage;
