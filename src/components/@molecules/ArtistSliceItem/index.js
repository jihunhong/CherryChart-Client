import Text from '@atoms/Text';
import faker from 'faker';
import { ArtistSliceItemContainer } from './style';

const ArtistSliceItem = () => {
  return (
    <ArtistSliceItemContainer align="middle" gutter={[0, 16]}>
      <a className="img-link">
        <img src={faker.internet.avatar()} />
      </a>
      <a>
        <Text text={faker.name.findName()} />
      </a>
    </ArtistSliceItemContainer>
  );
};

export default ArtistSliceItem;
