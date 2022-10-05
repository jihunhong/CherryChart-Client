import usePlayerControl from '@hooks/player/usePlayerControl';
import { useSelector } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import SortablePlayerMusicItem from '../SortablePlayerMusicItem';

const SortablePlayList = SortableContainer(({ dataSource, ...props }) => {
  const { handlePlayItem } = usePlayerControl();
  const selectedIndex = useSelector(state => state.player.selectedIndex);
  return (
    <div>
      {dataSource.map((item, index) => (
        <SortablePlayerMusicItem
          className={selectedIndex === index ? 'active' : ''}
          onClick={handlePlayItem}
          key={`item-${index}`}
          index={index}
          data-index={index}
          {...item}
        />
      ))}
    </div>
  );
});

export default SortablePlayList;
