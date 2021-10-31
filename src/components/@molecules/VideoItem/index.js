import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { VideoItemContainer } from './style';

const VideoItem = ({ title, artist, videoId }) => {
  return (
    <VideoItemContainer>
      <img src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`} />
      <div>
        <Title level={5} ellipsis text={title} className="video-title" />
        <Text type="secondary" text={artist} />
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;
