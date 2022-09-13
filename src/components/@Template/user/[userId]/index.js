import ProfileArtists from '@organisms/ProfileArtists';
import ProfileBanner from '@organisms/ProfileBanner';
import ProfilePlaylists from '@organisms/ProfilePlaylists';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const me = useSelector(state => state.user.me);
  const favoriteArtists = useSelector(state => state.user.favorite_artists);
  return (
    <section>
      <ProfileBanner />
      <ProfilePlaylists dataSource={me?.playlists} />
      <ProfileArtists dataSource={favoriteArtists} />
    </section>
  );
};

export default UserDetail;
