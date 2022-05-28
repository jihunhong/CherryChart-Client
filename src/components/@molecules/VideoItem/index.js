import Text from '@atoms/Text';
import Title from '@atoms/Title';
import useAddItem from '@hooks/useAddItem';
import { VideoItemContainer } from './style';

const VideoItem = ({ title, artistName, videoId, albumName, smallCoverImage }) => {
  const [handler] = useAddItem({ title, artistName, videoId, albumName, smallCoverImage });
  return (
    <VideoItemContainer onClick={handler}>
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`${title}'s youtube thumbnail`}
      />
      <div>
        <Title level={5} ellipsis text={title} className="video-title" />
        <Text type="secondary" text={artistName} />
      </div>
    </VideoItemContainer>
  );
};

export default VideoItem;
