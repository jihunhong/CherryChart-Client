import usePlayerControl from '@hooks/player/usePlayerControl';
import { memo } from 'react';
import { BiCaretUp, BiRepeat, BiShuffle, BiVolumeFull } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const PlayerControls = () => {
  const loop = useSelector(state => state.player.loop);
  const { handleRepeat, handleShuffle, handleTogglePlaylist } = usePlayerControl();
  return (
    <>
      <div className="icon-container">
        <BiVolumeFull size={18} />
      </div>
      <div className={`icon-container ${loop ? 'active' : ''}`} onClick={handleRepeat}>
        <BiRepeat size={18} />
      </div>
      <div className="icon-container" onClick={handleShuffle}>
        <BiShuffle size={18} />
      </div>
      <div className="icon-container" onClick={handleTogglePlaylist}>
        <BiCaretUp size={18} />
      </div>
    </>
  );
};

export default memo(PlayerControls);
