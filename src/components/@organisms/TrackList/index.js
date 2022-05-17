import TrackItem from '@molecules/TrackItem';
import { MusicList } from '@organisms/Chart/style';

const TrackList = ({ dataSource = [] }) => {
  return (
    <>
      <MusicList>
        {dataSource?.map((t, index) => (
          <TrackItem key={t.title} title={t.title} rank={index + 1} videoId={t.video?.videoId} />
        ))}
      </MusicList>
    </>
  );
};

export default TrackList;
