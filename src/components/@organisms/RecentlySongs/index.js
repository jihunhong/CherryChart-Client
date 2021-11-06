import Title from '@atoms/Title';
import { songGridSetting } from '@config/carousel';
import { SongsGrid } from '@molecules/SongsGrids/style';
import SongSliceItem from '@molecules/SongSliceItem';
import { useSelector } from 'react-redux';
import MultiCarousel from 'react-slick';

const perPageItemCount = 16;

const RecentlySongs = () => {
  const { recentSongs } = useSelector(state => state.content);

  return (
    <section className="recently-updated-songs">
      <Title level={4} text={'Recently Songs'} />
      <MultiCarousel {...songGridSetting}>
        {Array(recentSongs?.length || 0 / perPageItemCount)
          .fill()
          .map((_, i) => (
            <SongsGrid>
              {recentSongs.slice(perPageItemCount * i, perPageItemCount * (i + 1)).map(song => (
                <SongSliceItem key={song.id} {...song} />
              ))}
            </SongsGrid>
          ))}
      </MultiCarousel>
    </section>
  );
};

export default RecentlySongs;
