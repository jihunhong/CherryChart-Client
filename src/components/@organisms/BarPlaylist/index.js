import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { useSelector } from 'react-redux';
import { PlaylistSideContainer } from './style';
/**
 *
 * @description <BarPlaylistContainer/>는 부모 컴포넌트인 <BarPlayer />에게 위임해서 랜더링한다.
 * @reason 컴포넌트의 wrapper가 아닌 내용물만을 lazyLoad함과 동시에 wrapper의 경우
 *         store에있는 isExpand값으로 부터 처리되는 transition을 lazyLoad 시점보다 이른 때에 하기 위함이다.
 */

const BarPlaylist = () => {
  const playList = useSelector(state => state.player.playList);

  return (
    <>
      <div className="player-side"></div>
      <PlaylistSideContainer className="playlist-side">
        <div className="grid">
          {playList.map(item => (
            <PlayerMusicItem {...item} coverImage={item?.smallCoverImage} />
          ))}
        </div>
      </PlaylistSideContainer>
    </>
  );
};

export default BarPlaylist;
