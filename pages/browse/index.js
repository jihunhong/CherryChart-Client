import AppLayout from '@Layout/AppLayout';
import BrowsePage from '@Template/browse';

const Browse = () => {
  return <BrowsePage />;
};

Browse.getLayout = page => <AppLayout>{page}</AppLayout>;

export default Browse;
