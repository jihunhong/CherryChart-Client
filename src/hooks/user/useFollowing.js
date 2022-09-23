import { userFollow, userUnFollow } from '@actions/userActions';
import { error, success } from '@config/notification';
import useToggle from '@hooks/util/useToggle';
import { useRouter } from 'next/router';
import { useDebugValue, useEffect } from 'react';
import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

const useFollowing = profile => {
  const router = useRouter();
  const dispatch = useDispatch();
  const me = useSelector(state => state.user.me);
  const [followStatus, _, setFollowStatus] = useToggle(false);

  useEffect(() => {
    const flag = me?.followings?.includes(profile?.id);
    if (flag) {
      setFollowStatus(true);
    } else {
      setFollowStatus(false);
    }
  }, [profile, router]);

  const handleFollow = async () => {
    const action = followStatus ? userUnFollow : userFollow;
    try {
      await dispatch(action({ userId: profile?.id })).unwrap();
    } catch (err) {
      error({
        message: err.message,
      });
    }
  };

  useDebugValue([followStatus, handleFollow, followStatus ? RiUserUnfollowLine : RiUserFollowLine]);

  return [followStatus, handleFollow, followStatus ? RiUserUnfollowLine : RiUserFollowLine];
  /*
    [팔로우된 상태, following 된 상태에따른 아이콘 컴포넌트]
  */
};

export default useFollowing;
