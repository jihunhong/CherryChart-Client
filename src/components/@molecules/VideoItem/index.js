import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAddItem from '@hooks/useAddItem';
import { VideoItemContainer } from './style';

const VideoItem = ({ title, artistName, videoId, albumName }) => {
  const [handler] = useAddItem({ title, artistName, videoId, albumName });
  return (
    <VideoItemContainer onClick={handler}>
      <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} />
      <div>
        <Title level={5} ellipsis text={title} className="video-title" />
        <Text type="secondary" text={artistName} />
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;
