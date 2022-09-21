import useToggle from '@hooks/util/useToggle';
import { useRouter } from 'next/router';
import { useDebugValue, useEffect } from 'react';
import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const useFollowing = () => {
  const me = useSelector(state => state.user.me);
  const router = useRouter();
  const [followStatus, _, setFollowStatus] = useToggle(false);

  useEffect(() => {
    const currentUserId = parseInt(router.query.userId, 10);
    const flag = me?.followings?.includes(currentUserId);
    if (flag) {
      setFollowStatus(true);
    } else {
      setFollowStatus(false);
    }
  }, [me, router]);

  useDebugValue([followStatus, followStatus ? RiUserUnfollowLine : RiUserFollowLine]);

  return [followStatus, followStatus ? RiUserUnfollowLine : RiUserFollowLine];
  /*
    [팔로우된 상태, following 된 상태에따른 아이콘 컴포넌트]
  */
};

export default useFollowing;
