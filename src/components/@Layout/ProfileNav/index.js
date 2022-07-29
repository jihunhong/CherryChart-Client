import { Typography } from 'antd';
import { FaApple } from 'react-icons/fa';
import { ProfileNavContainer } from './style';

const ProfileNav = () => {
  return (
    <ProfileNavContainer align="center">
      <a href="/">
        <FaApple />
      </a>
    </ProfileNavContainer>
  );
};

export default ProfileNav;
