import Title from '@atoms/Title';
import { artistCarouselSetting, songGridSetting, videoCarouselSetting } from '@config/carousel';
import ArtistSliceItem from '@molecules/ArtistSliceItem';
import SongSliceItem from '@molecules/SongSliceItem';
import VideoItem from '@molecules/VideoItem';
import { SongsGrid } from '@organisms/SongsGrids/style';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { BrowserContainer } from './style';

const perPageItemCount = 16;

const BrowsePage = () => {
  const { recentVideos, recentSongs } = useSelector(state => state.content);
  return (
    <BrowserContainer>
      <Title level={2} text={'Browse'} />
      <hr />
      <section className="recently-updated-videos">
        <Title level={4} text={'Recently Videos'} />
        <MultiCarousel {...videoCarouselSetting}>
          {recentVideos.map(item => (
            <VideoItem
              key={item.videoId}
              videoId={item.videoId}
              title={item.Music?.title}
              artist={item.Music?.artist}
            />
          ))}
        </MultiCarousel>
      </section>

      <section className="recently-updated-songs">
        <Title level={4} text={'Recently Songs'} />
        <MultiCarousel {...songGridSetting}>
          {Array(recentSongs?.length || 0 / perPageItemCount)
            .fill()
            .map((_, i) => (
              <SongsGrid>
                {recentSongs.slice(perPageItemCount * i, perPageItemCount * (i + 1)).map(song => (
                  <SongSliceItem key={song.id} {...song} />
                ))}
              </SongsGrid>
            ))}
        </MultiCarousel>
      </section>

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
    </BrowserContainer>
  );
};

export default BrowsePage;
