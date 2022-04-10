import SongSliceItem from '@molecules/SongSliceItem';
import { SongsGrid } from './style';

const perPageItemCount = 16;

const SongsGrids = ({ dataSource = [], ...rest }) => {
  return (
    <>
      {Array(dataSource?.length / perPageItemCount)
        .fill()
        .map((_, i) => (
          <SongsGrid {...rest}>
            {dataSource?.slice(perPageItemCount * i, perPageItemCount * (i + 1)).map(song => (
              <SongSliceItem key={song.id} {...song} />
            ))}
          </SongsGrid>
        ))}
    </>
  );
};

export default SongsGrids;
