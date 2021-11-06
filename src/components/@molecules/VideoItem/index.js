import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAddItem from '@hooks/useAddItem';
import { VideoItemContainer } from './style';

const VideoItem = ({ title, artist, videoId, albumName }) => {
  const [handler] = useAddItem({ title, artist, videoId, album: albumName });
  return (
    <VideoItemContainer onClick={handler}>
      <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} />
      <div>
        <Title level={5} ellipsis text={title} className="video-title" />
        <Text type="secondary" text={artist} />
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;
