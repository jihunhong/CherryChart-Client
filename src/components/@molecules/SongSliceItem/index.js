import { FlexColumn } from '@atoms/FlexColumn/style';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { cdnURL } from '@config/';
import { Avatar, Row } from 'antd';
import Link from 'next/link';
import { SongSliceItemContainer } from './style';

const SongSliceItem = ({ title, artist, album, AlbumId }) => {
  return (
    <SongSliceItemContainer>
      <Link
        href={{
          pathname: '/album/[albumId]',
          query: {
            albumId: AlbumId,
          },
        }}
      >
        <a>
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
        </a>
      </Link>
    </SongSliceItemContainer>
  );
};

export default SongSliceItem;
