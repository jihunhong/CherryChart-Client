import PageHeadTitle from '@atoms/PageHeadTitle';
import RecentlySongs from '@organisms/RecentlySongs';
import { SingleTemplate } from '@Template/browse/style';
import { BiMusic } from 'react-icons/bi';

const SongPage = () => {
  return (
    <SingleTemplate>
      <PageHeadTitle icon={<BiMusic />} text={'Songs'} />
      <RecentlySongs />
    </SingleTemplate>
  );
};

export default SongPage;
