import ProfileCircle from '@atoms/ProfileCircle';
import useFollowing from '@hooks/user/useFollowing';
import UserScore from '@molecules/UserScore';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  ProfileBannerContainer,
  ProfileInfoContainer,
  UserActionsContainer,
  UserMetaContainer,
} from './style';

const ProfileBanner = () => {
  const me = useSelector(state => state.user.me);
  const [followStatus, FollowToggle] = useFollowing();
  const router = useRouter();

  return (
    <ProfileBannerContainer>
      <div className="absolute-section">
        <ProfileCircle src={me?.picture} width={80} height={80} />
        <ProfileInfoContainer>
          <h4>{me?.nickname}</h4>
          <h5>@&nbsp;{me?.email}</h5>
        </ProfileInfoContainer>
        {parseInt(router.query.userId, 10) !== me?.id ? (
          <UserActionsContainer>
            <Button ghost type="primary" icon={<FollowToggle />}>
              {followStatus ? 'UnFollow' : 'Follow'}
            </Button>
          </UserActionsContainer>
        ) : null}
        <UserMetaContainer>
          <UserScore label="Follower" count={me?.followers?.length} />
          <UserScore label="Following" count={me?.followings?.length} />
          <UserScore label="Like" count={me?.liked?.length} />
        </UserMetaContainer>
      </div>
    </ProfileBannerContainer>
  );
};

export default ProfileBanner;
