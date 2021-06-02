import TrackItem from '@molecules/TrackItem';
import { MusicList } from '@organisms/Chart/style';
import { useSelector } from 'react-redux';

const TrackList = () => {
  const { tracks } = useSelector(state => state.content);

  return (
    <>
      <MusicList>
        {tracks.map((t, index) => (
          <TrackItem key={t.title} title={t.title} rank={index + 1} videoId={t.Video?.videoId} />
        ))}
      </MusicList>
    </>
  );
};

export default TrackList;
