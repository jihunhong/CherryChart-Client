import Tabs from '@atoms/Tabs';
import SortablePlayList from '@components/@hoc/SortablePlayList';
import useDragItem from '@hooks/player/useDragItem';
import usePlaylistModal from '@hooks/player/usePlaylistModal';
import PlaylistItem from '@molecules/PlaylistItem';
import ProfilePlaylists from '@organisms/ProfilePlaylists';
import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { BiListPlus } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { PlaylistGrid, PlaylistSideContainer } from './style';
/**
 *
 * @description <BarPlaylistContainer/>는 부모 컴포넌트인 <BarPlayer />에게 위임해서 랜더링한다.
 * @reason 컴포넌트의 wrapper가 아닌 내용물만을 lazyLoad함과 동시에 wrapper의 경우
 *         store에있는 isExpand값으로 부터 처리되는 transition을 lazyLoad 시점보다 이른 때에 하기 위함이다.
 */

const PlaylistInsertModal = dynamic(() => import('@organisms/Modal/PlaylistInsertModal'), {
  ssr: false,
});

const BarPlaylist = () => {
  const playList = useSelector(state => state.player.playList);
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  const { onSortEnd } = useDragItem();
  const [visible, toggle] = usePlaylistModal(false);
  const usersList = useSelector(state => state.user.me?.playlists);

  return (
    <>
      {visible ? <PlaylistInsertModal visible={visible} onCancel={toggle} /> : <></>}
      <div className="player-side"></div>
      <PlaylistSideContainer className="playlist-side" $selectedIndex={selectedIndex}>
        <Tabs
          items={[
            {
              label: '노래',
              children: (
                <>
                  <div className="playlist-header">
                    <div className="save-playlist">
                      <Button ghost icon={<BiListPlus color="#fff" />} onClick={toggle}>
                        재생목록 저장
                      </Button>
                    </div>
                  </div>
                  <div className="song-grid">
                    <SortablePlayList
                      dataSource={playList}
                      onSortEnd={onSortEnd}
                      distance={1}
                      helperClass="sortable-play-item"
                    />
                  </div>
                </>
              ),
            },
            {
              label: '보관함',
              children: (
                <PlaylistGrid>
                  <ProfilePlaylists title={'재생목록'} dataSource={usersList} />
                </PlaylistGrid>
              ),
            },
          ]}
        />
      </PlaylistSideContainer>
    </>
  );
};

export default BarPlaylist;
