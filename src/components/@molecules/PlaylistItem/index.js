import usePlaylistItem from '@hooks/playlistItem/usePlaylistItem';
import Image from 'next/image';
import { PlaylistItemContainer } from './style';

const PlaylistItem = ({ pId }) => {
  const [preview, error] = usePlaylistItem(pId);

  return (
    <PlaylistItemContainer>
      {preview?.thumbnails?.map(item => (
        <Image src={item} width={80} height={80} alt="cover" />
      ))}
    </PlaylistItemContainer>
  );
};

export default PlaylistItem;
