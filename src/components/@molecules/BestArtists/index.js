import Title from '@atoms/Title';
import useArtistPagination from '@hooks/useArtistPagination';
import { BsHeartFill } from 'react-icons/bs';
import { FiWatch } from 'react-icons/fi';
import { SliderPagination, StyledBestArtist, StyledDetailDiv } from './style';

const BestArtists = () => {
  const [artist, onChange, current] = useArtistPagination();
  return (
    <StyledBestArtist>
      <Title level={1} text="Trending" />
      <div className="meta-container">
        <div className="meta" key={artist?.profileImage}>
          <span className="artist-name">{artist?.artistName}</span>
          <p>
            This is sample static data (artist, description, using time, etc.. ) consectetur
            adipisicing elit. Exercitationem nemo possimus saepe illum, sint at laboriosam deleniti
            molestiae provident aut quibusdam laudantium ut nobis asperiores magni incidunt
            consectetur officia tenetur!
          </p>
          <StyledDetailDiv>
            <div className="icon-container">
              <BsHeartFill fill="#fff" size={12} />
            </div>
            <div className="rated">
              <span>2K Likes</span>
              <span>•</span>
              <span>
                <FiWatch />
                12hr 36min
              </span>
            </div>
          </StyledDetailDiv>
        </div>
      </div>
      <div className="image-container" key={artist?.profileImage}>
        <img src={`${artist?.profileImage}?w=650&auto=format`} alt="best artist" />
      </div>
      <div className="pagination" onClick={onChange}>
        <SliderPagination
          data-index={0}
          className={`slider-pagination ${current === 0 ? 'active' : ''}`}
        />
        <SliderPagination
          data-index={1}
          className={`slider-pagination ${current === 1 ? 'active' : ''}`}
        />
        <SliderPagination
          data-index={2}
          className={`slider-pagination ${current === 2 ? 'active' : ''}`}
        />
      </div>
    </StyledBestArtist>
  );
};

export default BestArtists;
