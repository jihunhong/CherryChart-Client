import { FlexColumn } from '@atoms/FlexColumn/style';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { cdnURL } from '@config/';
import { Avatar, Row } from 'antd';
import { SongSliceItemContainer } from './style';

const SongSliceItem = ({ title, artist, album }) => {
  return (
    <SongSliceItemContainer>
      <Row align="middle" className="row-content">
        <Avatar
          shape="square"
          size={64}
          src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
          className="album-cover"
        />
        <FlexColumn align="start">
          <Title level={5} text={title} ellipsis />
          <Text ellipsis type="secondary" text={artist} />
        </FlexColumn>
      </Row>
    </SongSliceItemContainer>
  );
};

export default SongSliceItem;
