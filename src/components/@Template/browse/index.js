import PageHeadTitle from '@atoms/PageHeadTitle';
import RecentlySongs from '@organisms/RecentlySongs';
import RecentlyVideos from '@organisms/RecentlyVideos';
import { SingleTemplate } from './style';

const BrowsePage = () => {
  return (
    <SingleTemplate>
      <PageHeadTitle text="Browse" />
      <RecentlyVideos />
      <RecentlySongs />
    </SingleTemplate>
  );
};

export default BrowsePage;
