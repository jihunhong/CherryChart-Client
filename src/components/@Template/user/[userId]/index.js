import ProfileArtists from '@organisms/ProfileArtists';
import ProfileBanner from '@organisms/ProfileBanner';
import ProfilePlaylists from '@organisms/ProfilePlaylists';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const me = useSelector(state => state.user.me);
  const favorite_artists = useSelector(state => state.user.favorite_artists);
  return (
    <section>
      <ProfileBanner />
      <ProfilePlaylists dataSource={me?.playlists} />
      <ProfileArtists dataSource={favorite_artists} />
    </section>
  );
};

export default UserDetail;
