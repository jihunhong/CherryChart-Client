import { FlexColumn } from '@atoms/FlexColumn/style';
import useInsertPlaylist from '@hooks/player/useInsertPlaylist';
import useVideoPlaylist from '@hooks/player/useVideoPlaylist';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { Checkbox, Divider, Input, Modal } from 'antd';
import { BiListCheck } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { CustomModalHeader, PlaylistInsertModalBody } from './style';

const PlaylistInsertModal = ({ visible, onCancel }) => {
  const [playList] = useVideoPlaylist();
  const { handleInsertPlaylist, handleCheckboxs, onChangeTitle, onChangeDescription } =
    useInsertPlaylist();
  const loading = useSelector(state => state.user.create_playlist_loading);

  return (
    <Modal
      centered
      destroyOnClose
      title={null}
      visible={visible}
      onCancel={onCancel}
      onOk={handleInsertPlaylist}
      confirmLoading={loading}
    >
      <CustomModalHeader>
        <div className="grid-container">
          <div className="playlist-thumbnail">
            <BiListCheck size={60} color="#696969" />
          </div>
          <div className="playlist-inputs">
            <div className="input-container">
              <input
                onChange={onChangeTitle}
                className="title"
                placeholder="Title"
                autoComplete="false"
                autoCapitalize="none"
                maxLength={150}
              />
            </div>
            <div className="input-container">
              <input
                onChange={onChangeDescription}
                className="description"
                placeholder="Description"
                autoComplete="false"
                autoCapitalize="none"
                maxLength={450}
              />
            </div>
          </div>
        </div>
      </CustomModalHeader>
      <Divider />
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
