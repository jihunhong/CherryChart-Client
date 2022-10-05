import useRemoveItem from '@hooks/player/useRemoveItem';
import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { FiDelete } from 'react-icons/fi';
import { SortableElement } from 'react-sortable-hoc';

const SortablePlayerMusicItem = SortableElement(item => {
  const [onClick] = useRemoveItem(item);
  return (
    <PlayerMusicItem tabIndex={0} {...item}>
      <div className="actions">
        <FiDelete color="#fff" onClick={onClick} />
      </div>
    </PlayerMusicItem>
  );
});

export default SortablePlayerMusicItem;
