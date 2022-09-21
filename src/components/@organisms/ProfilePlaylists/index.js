import Slider from '@atoms/Slider';
import Title from '@atoms/Title';
import PlaylistItem from '@molecules/PlaylistItem';
import { ProfilePlaylistsContainer } from './style';

const ProfilePlaylists = ({ dataSource }) => {
  return (
    <ProfilePlaylistsContainer>
      <section>
        <Title level={4} text="Playlist" />
        <Slider
          occupy={1 / 12}
          dataSource={dataSource}
          renderItem={item => <PlaylistItem pId={item.pId} />}
        />
      </section>
    </ProfilePlaylistsContainer>
  );
};
export default ProfilePlaylists;
