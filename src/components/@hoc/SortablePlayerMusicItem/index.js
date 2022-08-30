import PlayerMusicItem from '@molecules/PlayerMusicItem';
import { SortableElement } from 'react-sortable-hoc';

const SortablePlayerMusicItem = SortableElement(item => <PlayerMusicItem tabIndex={0} {...item} />);

export default SortablePlayerMusicItem;
