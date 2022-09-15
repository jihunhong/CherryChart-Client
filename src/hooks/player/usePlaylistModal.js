import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { warn } from '@config/notification';
import { useRouter } from 'next/router';
import playerSlice from '@reducers/player';

const usePlaylistModal = () => {
  const [visible, setVisible] = useState(false);
  const me = useSelector(state => state.user.me);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleModal = useCallback(() => {
    if (!me) {
      warn({
        message: '로그인이 필요합니다',
      });
      dispatch(playerSlice.actions.togglePlayList());
      router.push(`/login?redirect=${router.asPath || '/'}`);
    } else {
      setVisible(!visible);
    }
  }, [me, visible]);

  return [visible, handleModal];
};

export default usePlaylistModal;
