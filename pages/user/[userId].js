import { loadFavoriteArtist, loadOtherUser } from '@actions/userActions';
import AppLayout from '@Layout/AppLayout';
import wrapper from '@store/configureStore';
import UserDetail from '@Template/user/[userId]';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const otherUser = useSelector(state => state.user.otherUser);
  return <UserDetail profile={otherUser} />;
};

UserProfile.getLayout = page => <AppLayout>{page}</AppLayout>;

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await context.store.dispatch(
    loadOtherUser({
      id: context.query.userId,
    }),
  );

  if (!context.store.getState().user.otherUser) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
  await context.store.dispatch(
    loadFavoriteArtist({
      userId: context.query.userId,
    }),
  );
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
  return {
    props: {},
  };
});

export default UserProfile;
