import { loadFavoriteArtist } from '@actions/userActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import UserDetail from '@Template/user/[userId]';

const UserProfile = () => {
  return <UserDetail />;
};

UserProfile.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadFavoriteArtist({
      userId: context.query.userId,
    }),
  );
});

export default UserProfile;
