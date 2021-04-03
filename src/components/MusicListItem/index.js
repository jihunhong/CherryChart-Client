import { Avatar } from 'antd';
import { BiHeart } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa';
import { MusicListItemContainer, Rank, CoverImageContainer, Title, Artist, Artist as AlbumName, YoutubeIcon, HeartIcon } from './style';
import { cdnURL } from '@config';
import { useDispatch } from 'react-redux';
import { addMusicToPlayList } from '@actions/';

const MusicListItem = ({ rank, title, artist, album }) => {
  const dispatch = useDispatch();

  const handleMusic = () => {
    dispatch(
      addMusicToPlayList({
        title, artist, album
      })
    )
  }

  return (
    <MusicListItemContainer onClick={handleMusic}>
      <Rank>{`0${rank}`.slice(-2)}</Rank>

      <CoverImageContainer>
        <Avatar shape="square" size={64} src={`${cdnURL}/${album.replace(/[`~!@#$%^&*|\\\'\";:\/?]/g, '_')}.png`} />
      </CoverImageContainer>

      <Title>{title}</Title>

      <Artist>{artist}</Artist>

      <AlbumName>{album}</AlbumName>

      <YoutubeIcon>
        <FaYoutube />
      </YoutubeIcon>

      <HeartIcon>
        <BiHeart />
      </HeartIcon>
    </MusicListItemContainer>
  );
};

export default MusicListItem;
