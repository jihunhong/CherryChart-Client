import { Typography } from 'antd';
import { FaApple } from 'react-icons/fa';
import { ProfileNavContainer } from './style';

const ProfileNav = () => {
  return (
    <ProfileNavContainer align="center">
      <FaApple />
      <Typography.Title level={5}>Cherry Chart</Typography.Title>
    </ProfileNavContainer>
  );
};

export default ProfileNav;
