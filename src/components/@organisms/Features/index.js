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
    <>
      <FeatureContainer>
        <Row gutter={32}>
          <Col offset={1} md={5} className="chart-column">
            <FlexColumn gutter={[16, 22]}>
              <Image
                src="feature_chart.png?w=636&h=488&auto=format"
                width={2128}
                height={1635}
                priority
              />
              <Image
                src="feature_albums.png?w=636&h=486&auto=format"
                className="albums"
                width={788}
                height={602}
              />
            </FlexColumn>
          </Col>
          <Col md={4}>
            <FlexColumn gutter={[16, 32]} className="play-column">
              <Image
                src="feature_player.png?w=502&h=608&auto=format"
                width={818}
                height={992}
                priority
              />
              <Image
                src="feature_album.png?w=502&h=370&auto=format"
                width={1719}
                height={1267}
                priority
              />
            </FlexColumn>
          </Col>
          <Col offset={3} md={11} className="feature-description">
            <Title text="Listen and Watch" />
            <Text text="Browse the KPOP charts and add your favorite songs to your playlist!" />
            <Text text="Take a look at the songs that are counted every day." />
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
    </>
  );
};

export default Features;
