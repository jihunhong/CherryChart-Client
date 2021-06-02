import AlbumInfo from '@components/@organisms/AlbumInfo';
import TrackList from '@organisms/TrackList';

const AlbumDetail = () => {
  return (
    <>
      <AlbumInfo />
      <TrackList />
      {/* <Title level={5}>{`More by ${data.artist}`}</Title> */}
    </>
  );
};

export default AlbumDetail;
