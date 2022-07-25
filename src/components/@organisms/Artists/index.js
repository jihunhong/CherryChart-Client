import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { ArtistsContainer } from './style';

const Artists = ({ dataSource = [] }) => {
  return (
    <>
      <ArtistsContainer>
        <Row justify="start">
          <Col md={10} className="artists-description">
            <Title text="Take a look your Favorite Artist" />
            <Text text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />
          </Col>
          <Col offset={2} md={12} className="artists-avatars">
            {/** TODO :: 앨범 데이터를 임시로 사용 */}
            <div className="artists-avatars-container">
              {dataSource?.slice(0, 25).map(item => (
                <div key={item?.music.id}>
                  <LinkHOC href={`/album/${item?.music.albumId}`}>
                    <div>
                      <Image src={item?.music?.middleArtistProfile} width={300} height={300} />
                    </div>
                  </LinkHOC>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </ArtistsContainer>
    </>
  );
};

export default Artists;
