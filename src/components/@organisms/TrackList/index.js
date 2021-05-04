import { Rank } from '@components/MusicListItem/style';
import { Title } from '@components/MusicListItem/style';
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
