import PageHeadTitle from '@atoms/PageHeadTitle';
import Title from '@atoms/Title';
import { artistCarouselSetting } from '@config/carousel';
import ArtistSliceItem from '@molecules/ArtistSliceItem';
import RecentlySongs from '@organisms/RecentlySongs';
import RecentlyVideos from '@organisms/RecentlyVideos';
import MultiCarousel from 'react-slick';
import { SingleTemplate } from './style';

const BrowsePage = () => {
  return (
    <SingleTemplate>
      <PageHeadTitle text={'Browse'} />
      <RecentlyVideos />
      <RecentlySongs />

      <section className="recently-updated-artists">
        <Title level={4} text={'Recently Artists'} />
        <MultiCarousel {...artistCarouselSetting}>
          {Array(24)
            .fill()
            .map(() => (
              <ArtistSliceItem />
            ))}
        </MultiCarousel>
      </section>
    </SingleTemplate>
  );
};

export default BrowsePage;
