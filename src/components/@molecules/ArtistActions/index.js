import faker from 'faker';
import { BiAddToQueue, BiHeart } from 'react-icons/bi';
import { ArtistActionsContainer } from './style';

const ArtistActions = () => {
  return (
    <ArtistActionsContainer>
      <section>
        <BiHeart />
        <span>{faker.random.number(100)}</span>
      </section>
      <section>
        <BiAddToQueue />
        <span>{faker.random.number(100)}</span>
      </section>
    </ArtistActionsContainer>
  );
};

export default ArtistActions;
