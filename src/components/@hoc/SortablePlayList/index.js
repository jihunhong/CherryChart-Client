import usePlayerControl from '@hooks/player/usePlayerControl';
import { SortableContainer } from 'react-sortable-hoc';
import SortablePlayerMusicItem from '../SortablePlayerMusicItem';

const SortablePlayList = SortableContainer(({ dataSource, ...props }) => {
  const { handlePlayItem } = usePlayerControl();
  return (
    <div>
      {dataSource.map((item, index) => (
        <SortablePlayerMusicItem
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
