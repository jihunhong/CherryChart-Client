import Title from '@atoms/Title';
import { BsHeartFill } from 'react-icons/bs';
import { FiWatch } from 'react-icons/fi';
import { StyledBestArtist, StyledDetailDiv } from './style';

const BestArtist = ({ src, artistName }) => {
  return (
    <StyledBestArtist>
      <Title level={2} text="Trending" />
      <div className="meta-container">
        <div className="meta">
          <span className="artist-name">{artistName}</span>
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
      <img src={src} alt="best artist" />
    </StyledBestArtist>
  );
};

export default BestArtist;
