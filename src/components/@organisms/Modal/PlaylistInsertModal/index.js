import useInsertPlaylist from '@hooks/player/useInsertPlaylist';
import useVideoPlaylist from '@hooks/player/useVideoPlaylist';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { Checkbox, Modal, Row } from 'antd';
import { useSelector } from 'react-redux';
import { CustomModalHeader, PlaylistInsertModalBody } from './style';

const PlaylistInsertModal = ({ visible, onCancel }) => {
  const [playList] = useVideoPlaylist();
  const [handleInsert, handleCheckboxs] = useInsertPlaylist();
  const loading = useSelector(state => state.user.create_playlist_loading);

  return (
    <Modal
      centered
      destroyOnClose
      title={null}
      visible={visible}
      onCancel={onCancel}
      onOk={handleInsert}
      confirmLoading={loading}
    >
      <CustomModalHeader>
        {/* sample playlist image */}
        {/* title, description */}
      </CustomModalHeader>
      <PlaylistInsertModalBody>
        <div className="grid">
          {playList.map((item, index) => (
            <article className="grid-item" key={`${item?.id}-${index}`}>
              <Checkbox onChange={handleCheckboxs} defaultChecked id={item.id} />
              <PlayerMusicItem {...item} />
            </article>
          ))}
        </div>
      </PlaylistInsertModalBody>
    </Modal>
  );
};

export default PlaylistInsertModal;
