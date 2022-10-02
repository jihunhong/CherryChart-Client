import TrackItem from '@molecules/TrackItem';
import { StyledTrackList } from './style';

const TrackList = ({ dataSource = [] }) => {
  return (
    <>
      <StyledTrackList>
        {dataSource?.map((t, index) => (
          <TrackItem key={t.title} rank={index + 1} videoId={t.video?.videoId} {...t} />
        ))}
      </StyledTrackList>
    </>
  );
};

export default TrackList;
