import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { BrowserContainer } from './style';

const BrowsePage = () => {
  return (
    <BrowserContainer>
      <Title level={2} text={'Browse'} />
      <hr />

      <section className="recently-updated-videos">
        <Title level={4} text={'Recently Updated'} />
        <Text text={'12 Videos'} />
      </section>
    </BrowserContainer>
  );
};

export default BrowsePage;
