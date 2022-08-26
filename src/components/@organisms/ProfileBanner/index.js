import { FlexColumn } from '@atoms/FlexColumn/style';
import ProfileCircle from '@atoms/ProfileCircle';
import UserScore from '@molecules/UserScore';
import { FiMail } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { ProfileBannerContainer, ProfileInfoContainer, UserMetaContainer } from './style';

const ProfileBanner = () => {
  const me = useSelector(state => state.user.me);

  return (
    <ProfileBannerContainer>
      <div className="absolute-section">
        <ProfileCircle src={me?.picture} width={80} height={80} />
        <ProfileInfoContainer>
          <h4>{me?.nickname}</h4>
          <h5>
            <FiMail />
            {me?.email}
          </h5>
        </ProfileInfoContainer>
        <UserMetaContainer>
          <UserScore label="Follower" count="3.4k" />
          <UserScore label="Playlist" count={me?.playlists?.length} />
          <UserScore label="Favorite" count={97} />
        </UserMetaContainer>
      </div>
    </ProfileBannerContainer>
  );
};

export default ProfileBanner;
