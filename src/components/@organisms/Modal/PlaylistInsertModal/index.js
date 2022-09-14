import Input from '@atoms/Input';
import useInsertPlaylist from '@hooks/player/useInsertPlaylist';
import useVideoPlaylist from '@hooks/player/useVideoPlaylist';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { Checkbox, Divider, Modal } from 'antd';
import { BiListCheck } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { InsertModalHeader, PlaylistInsertModalBody } from './style';

const PlaylistInsertModal = ({ visible, onCancel }) => {
  const [playList] = useVideoPlaylist();
  const { handleInsertPlaylist, handleCheckboxs, titleRef, descriptionRef } =
    useInsertPlaylist(onCancel);
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
      <InsertModalHeader>
        <div className="grid-container">
          <div className="playlist-thumbnail">
            <BiListCheck size={60} color="#696969" />
          </div>
          <div className="playlist-inputs">
            <Input
              ref={titleRef}
              className="title"
              placeholder="Title"
              autoComplete="false"
              autoCapitalize="none"
              maxLength={150}
            />
            <Input
              ref={descriptionRef}
              className="description"
              placeholder="Description"
              autoComplete="false"
              autoCapitalize="none"
              maxLength={450}
            />
          </div>
        </div>
      </InsertModalHeader>
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
