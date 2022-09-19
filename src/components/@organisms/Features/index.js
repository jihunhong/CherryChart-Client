import { FlexColumn } from '@atoms/FlexColumn/style';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { imgCdn } from '@config/index';
import { Button, Row } from 'antd';
import Image from 'next/image';
import { BiWorld } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { FeatureContainer } from './style';

const Features = () => {
  return (
    <>
      <FeatureContainer>
        <div className="grid">
          <FlexColumn gutter={[0, 22]}>
            <Image
              src={`${imgCdn}/feature_chart.png?w=636&h=488&auto=format`}
              width={2128}
              height={1635}
              priority
              lazyBoundary="300px"
            />
            <Image
              src={`${imgCdn}/feature_albums.png?w=636&h=486&auto=format`}
              className="albums"
              width={788}
              height={602}
              lazyBoundary="300px"
            />
          </FlexColumn>
          <FlexColumn gutter={[0, 32]} className="play-column">
            <Image
              src={`${imgCdn}/feature_player.png?w=502&h=608&auto=format`}
              width={818}
              height={992}
              priority
              lazyBoundary="300px"
            />
            <Image
              src={`${imgCdn}/feature_album.png?w=502&h=370&auto=format`}
              width={1719}
              height={1267}
              priority
              lazyBoundary="300px"
            />
          </FlexColumn>
          <div />
          <div className="feature-description">
            <Title text="Listen and Watch" />
            <Text text="Browse the KPOP charts and add your favorite songs to your playlist!" />
            <Text text="Take a look at the songs that are counted every day." />
            <Row>
              <LinkHOC href="/chart">
                <Button type="primary" icon={<BsFillPlayFill color="#fff" />}>
                  DISCOVER
                </Button>
              </LinkHOC>
              <LinkHOC href="/browse">
                <Button type="primary" icon={<BiWorld color="#fff" />}>
                  BROWSE
                </Button>
              </LinkHOC>
            </Row>
          </div>
        </div>
      </FeatureContainer>
    </>
  );
};

export default Features;
