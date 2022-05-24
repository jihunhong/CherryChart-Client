import { useSelector } from 'react-redux';
import { ExpandBtn, ShrinkBtn } from './style';

const TogglePlaylistButton = () => {
  const isExpand = useSelector(state => state.player.isExpand);

  return <>{isExpand ? <ExpandBtn /> : <ShrinkBtn />}</>;
};

export default TogglePlaylistButton;
