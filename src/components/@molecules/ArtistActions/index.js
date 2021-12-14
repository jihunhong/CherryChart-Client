import { BiAddToQueue, BiHeart } from 'react-icons/bi';
import { ArtistActionsContainer } from './style';

const ArtistActions = () => {
  return (
    <ArtistActionsContainer>
      <section>
        <BiHeart />
        <span>{100}</span>
      </section>
      <section>
        <BiAddToQueue />
        <span>{30}</span>
      </section>
    </ArtistActionsContainer>
  );
};

export default ArtistActions;
