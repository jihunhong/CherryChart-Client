import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { cdnURL } from '@config/';
import { Avatar, Col, Row } from 'antd';
import faker from 'faker';
import { ArtistsContainer } from './style';

const Artists = ({ dataSource = [] }) => {
  return (
    <ArtistsContainer>
      <Row justify="start">
        <Col offset={1} md={9} className="artists-description">
          <Title text={'Take a look your Favorite Artist'} />
          <Text text={faker.lorem.paragraph()} />
        </Col>
        <Col offset={2} md={11} className="artists-avatars">
          {/** TODO :: 앨범 데이터를 임시로 사용 */}
          <div className="artists-avatars-container">
            {dataSource.slice(0, 52).map((item, index) => (
              <div key={index}>
                <LinkHOC href={`/album/${item.AlbumId}`}>
                  <Avatar
                    shape="circle"
                    src={`${cdnURL}/${item.album?.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`}
                    alt="artist's image"
                  />
                </LinkHOC>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </ArtistsContainer>
  );
};

export default Artists;
