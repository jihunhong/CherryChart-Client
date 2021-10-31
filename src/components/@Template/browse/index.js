import Title from '@atoms/Title';
import SongSliceItem from '@molecules/SongSliceItem';
import VideoItem from '@molecules/VideoItem';
import { SongsGrid } from '@organisms/SongsGrids/style';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { BrowserContainer } from './style';

const videoSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const songSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const perPageItemCount = 16;

const BrowsePage = () => {
  const { recentVideos, recentSongs } = useSelector(state => state.content);
  return (
    <BrowserContainer>
      <Title level={2} text={'Browse'} />
      <hr />
      <section className="recently-updated-videos">
        <Title level={4} text={'Recently Videos'} />
        <MultiCarousel {...videoSetting}>
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
        <MultiCarousel {...songSetting}>
          {Array(recentSongs?.length / perPageItemCount)
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
    </BrowserContainer>
  );
};

export default BrowsePage;
