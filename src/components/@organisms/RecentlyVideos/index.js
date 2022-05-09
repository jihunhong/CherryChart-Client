import Title from '@atoms/Title';
import { videoCarouselSetting } from '@config/carousel';
import VideoItem from '@molecules/VideoItem';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';
import { RecentlyVideosContainer } from './style';

const RecentlyVideos = () => {
  const { recentVideos } = useSelector(state => state.content);
  return (
    <RecentlyVideosContainer className="recently-updated-videos">
      <Title level={4} text={'Recently Videos'} />
      <MultiCarousel {...videoCarouselSetting}>
        {recentVideos.map(item => (
          <VideoItem
            key={item.videoId}
            videoId={item.videoId}
            title={item.music?.title}
            artist={item.music?.artist}
            albumName={item.music?.album?.albumName}
            {...item}
          />
        ))}
      </MultiCarousel>
    </RecentlyVideosContainer>
  );
};

export default RecentlyVideos;
