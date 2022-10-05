import usePlayerControl from '@hooks/player/usePlayerControl';
import { memo } from 'react';
import {
  BiCaretDown,
  BiCaretUp,
  BiRepeat,
  BiShuffle,
  BiVolumeFull,
  BiVolumeMute,
} from 'react-icons/bi';
import { useSelector } from 'react-redux';

const PlayerControls = () => {
  const loop = useSelector(state => state.player.loop);
  const isExpand = useSelector(state => state.player.isExpand);
  const muted = useSelector(state => state.player.muted);
  const { handleMute, handleRepeat, handleShuffle, handleTogglePlaylist } = usePlayerControl();
  return (
    <>
      <div className="icon-container" onClick={handleMute}>
        {muted ? <BiVolumeMute size={18} /> : <BiVolumeFull size={18} />}
      </div>
      <div className={`icon-container ${loop ? 'active' : ''}`} onClick={handleRepeat}>
        <BiRepeat size={18} />
      </div>
      <div className="icon-container" onClick={handleShuffle}>
        <BiShuffle size={18} />
      </div>
      <div className="icon-container" onClick={handleTogglePlaylist}>
        {isExpand ? <BiCaretDown size={18} /> : <BiCaretUp size={18} />}
      </div>
    </>
  );
};

export default memo(PlayerControls);
