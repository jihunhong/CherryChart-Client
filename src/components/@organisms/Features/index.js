import { FlexColumn } from '@atoms/FlexColumn/style';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { BiWorld } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { FeatureContainer } from './style';

const Features = () => {
  return (
    <FeatureContainer>
      <Row gutter={32}>
        <Col md={5} className="chart-column">
          <FlexColumn gutter={[16, 22]}>
            <Image src="/img/feature_chart.png" width={2128} height={1635} />
            <Image src="/img/feature_albums.png" className="albums" width={788} height={602} />
          </FlexColumn>
        </Col>
        <Col md={4}>
          <FlexColumn gutter={[16, 32]} className="play-column">
            <Image src="/img/feature_player.png" width={818} height={992} />
            <Image src="/img/feature_album.png" width={1719} height={1267} />
          </FlexColumn>
        </Col>
        <Col md={2}></Col>
        <Col md={12} className="feature-description">
          <Title text={'Listen and Watch'} />
          <Text text={'Browse the KPOP charts and add your favorite songs to your playlist!'} />
          <Text text={'Take a look at the songs that are counted every day.'} />
          <Row>
            <LinkHOC href="/chart">
              <Button type="primary" icon={<BsFillPlayFill color={'#fff'} fill={'#fff'} />}>
                DISCOVER
              </Button>
            </LinkHOC>
            <LinkHOC href="/browse">
              <Button type="primary" icon={<BiWorld color={'#fff'} fill={'#fff'} />}>
                BROWSE
              </Button>
            </LinkHOC>
          </Row>
        </Col>
      </Row>
    </FeatureContainer>
  );
};

export default Features;
