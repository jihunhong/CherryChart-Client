import { Typography } from 'antd';
import { ProfileAvatar, ProfileNavContainer } from './style';

const ProfileNav = () => {
  // const { me } = useSelector((state) => state.user);

  return (
    <ProfileNavContainer>
      <ProfileAvatar size={96} />
      <Typography.Title level={5} style={{ margin: 0 }}>
        your nickname
        {/* {me.userName} */}
      </Typography.Title>
      <Typography.Text type="secondary">
        your@email.com
        {/* {me.email} */}
      </Typography.Text>
    </ProfileNavContainer>
  );
};

export default ProfileNav;
