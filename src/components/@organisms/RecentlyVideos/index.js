import Slider from '@atoms/Slider';
import Title from '@atoms/Title';
import VideoItem from '@molecules/VideoItem';
import { useSelector } from 'react-redux';
import { RecentlyVideosContainer } from './style';

const RecentlyVideos = () => {
  const { recentVideos } = useSelector(state => state.content);
  return (
    <RecentlyVideosContainer className="recently-updated-videos">
      <Title level={4} text="Recently Videos" />
      <Slider
        occupy="30%"
        dataSource={recentVideos}
        renderItem={item => (
          <VideoItem
            key={item.videoId}
            title={item.music?.title}
            artistName={item.music?.artistName}
            albumName={item.music?.album?.albumName}
            smallCoverImage={item.music?.smallCoverImage}
            {...item}
          />
        )}
      />
    </RecentlyVideosContainer>
  );
};

export default RecentlyVideos;
