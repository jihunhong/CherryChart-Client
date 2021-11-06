import PageHeadTitle from '@atoms/PageHeadTitle';
import RecentlyVideos from '@organisms/RecentlyVideos';
import { SingleTemplate } from '@Template/browse/style';
import { BiMovie } from 'react-icons/bi';

const VideoPage = () => {
  return (
    <SingleTemplate>
      <PageHeadTitle text={'Videos'} icon={<BiMovie />} />
      <RecentlyVideos />
    </SingleTemplate>
  );
};

export default VideoPage;
