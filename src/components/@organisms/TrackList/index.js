import { Rank, Title } from '@molecules/MusicListItem/style';
import { Row } from 'antd';

const TrackList = ({ tracks }) => {
  return (
    <>
      {tracks.map((t, index) => (
        <Row>
          <Rank>{index + 1}</Rank>
          <Title>{t.title}</Title>
        </Row>
      ))}
    </>
  );
};

export default TrackList;
