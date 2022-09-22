import { logOut } from '@actions/userActions';
import { error, success } from '@config/notification';
import { useDispatch } from 'react-redux';

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogOut = async e => {
    e.preventDefault();
    try {
      await dispatch(logOut()).unwrap();
      success({
        message: '로그아웃 완료',
      });
    } catch (err) {
      error({
        message: err.message,
      });
    }
  };

  return [handleLogOut];
};

export default useLogout;
