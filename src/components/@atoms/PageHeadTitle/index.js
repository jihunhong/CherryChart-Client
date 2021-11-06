import Title from '@atoms/Title';
import { PageHeadTitleContainer } from './style';

const PageHeadTitle = ({ text, icon = null }) => {
  return (
    <PageHeadTitleContainer>
      <Title level={2} text={text} icon={icon} />
      <hr />
    </PageHeadTitleContainer>
  );
};

export default PageHeadTitle;
