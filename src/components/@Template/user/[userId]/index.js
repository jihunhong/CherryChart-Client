import ProfileArtists from '@organisms/ProfileArtists';
import ProfileBanner from '@organisms/ProfileBanner';
import ProfilePlaylists from '@organisms/ProfilePlaylists';
import { useSelector } from 'react-redux';

const UserDetail = ({ profile }) => {
  const favoriteArtists = useSelector(state => state.user.favorite_artists);
  return (
    <section>
      <ProfileBanner {...profile} />
      <ProfilePlaylists dataSource={profile?.playlists} />
      <ProfileArtists dataSource={favoriteArtists} />
    </section>
  );
};

export default UserDetail;
