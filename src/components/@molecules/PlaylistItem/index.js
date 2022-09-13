import LinkHOC from '@atoms/LinkHOC';
import usePlaylistItem from '@hooks/playlistItem/usePlaylistItem';
import Image from 'next/image';
import { BiListPlus, BiListUl } from 'react-icons/bi';
import { PlaylistItemContainer } from './style';

const PlaylistItem = ({ pId }) => {
  const [preview, error] = usePlaylistItem(pId);

  return (
    <PlaylistItemContainer $size={preview?.thumbnails?.length}>
      <LinkHOC href={`/playlist?pId=${preview?.pId}`}>
        <div className="thumb-container">
          {preview?.thumbnails?.length ? (
            preview.thumbnails.map(item => (
              <Image key={item} src={item} width={80} height={80} alt="cover" />
            ))
          ) : (
            <BiListPlus size={120} color="#696969" />
          )}
        </div>
      </LinkHOC>
      <div className="meta">
        <span className="title">{preview?.title}</span>
        <span className="user">
          {preview?.user?.nickname?.slice(0, 6)} • 노래 {preview?.playlistItems}곡
        </span>
      </div>
    </PlaylistItemContainer>
  );
};

export default PlaylistItem;
