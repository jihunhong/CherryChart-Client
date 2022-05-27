import AlbumCover from '@atoms/AlbumCover';
import { FlexColumn } from '@atoms/FlexColumn/style';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Row } from 'antd';
import Link from 'next/link';
import { SongSliceItemContainer } from './style';

const SongSliceItem = ({ title, artistName, albumId, smallCoverImage }) => {
  return (
    <SongSliceItemContainer>
      <Link
        href={{
          pathname: '/album/[albumId]',
          query: {
            albumId,
          },
        }}
      >
        <a>
          <Row align="middle" className="row-content">
            <AlbumCover size={64} src={smallCoverImage} className="album-cover" />
            <FlexColumn align="start">
              <Title level={5} text={title} ellipsis />
              <Text ellipsis type="secondary" text={artistName} />
            </FlexColumn>
          </Row>
        </a>
      </Link>
    </SongSliceItemContainer>
  );
};

export default SongSliceItem;
