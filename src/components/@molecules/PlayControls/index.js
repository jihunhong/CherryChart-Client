import usePlayControl from '@hooks/player/usePlayControl';
import { memo } from 'react';
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const PlayControls = () => {
  const { playerHandler, nextHandler, previouseHandler } = usePlayControl();
  const playing = useSelector(state => state.player.playing);

  return (
    <>
      <div className="icon-container" onClick={previouseHandler}>
        <BiSkipPrevious size={28} />
      </div>
      <div className="icon-container" onClick={playerHandler}>
        {playing ? <BiPause size={34} /> : <BiPlay size={34} />}
      </div>
      <div className="icon-container" onClick={nextHandler}>
        <BiSkipNext size={28} />
      </div>
    </>
  );
};

export default PlayControls;
