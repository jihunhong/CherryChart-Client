import { FlexColumn } from '@atoms/FlexColumn/style';
import ProfileCircle from '@atoms/ProfileCircle';
import Slider from '@atoms/Slider';
import Title from '@atoms/Title';
import PlaylistItem from '@molecules/PlaylistItem';
import { ProfilePlaylistsContainer } from '@organisms/ProfilePlaylists/style';
import { ArtistCircle } from './style';

const ProfileArtists = ({ dataSource }) => {
  return (
    <ProfilePlaylistsContainer>
      <section>
        <Title level={4} text="Artist" />
        <Slider
          occupy={1 / 12}
          dataSource={dataSource}
          renderItem={item => (
            <ArtistCircle align="middle" gutter={[0, 16]}>
              <div className="radius-cover">
                <ProfileCircle src={item?.src} width={152} height={152} />
              </div>
              <span>{item?.artistName}</span>
            </ArtistCircle>
          )}
        />
      </section>
    </ProfilePlaylistsContainer>
  );
};
export default ProfileArtists;
