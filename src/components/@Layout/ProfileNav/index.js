import Logo from '@atoms/Logo';
import { Typography } from 'antd';
import { FaApple, FaGlobeAfrica, FaGlobeAsia } from 'react-icons/fa';
import { ProfileNavContainer } from './style';

const ProfileNav = () => {
  return (
    <ProfileNavContainer align="center">
      <Logo />
    </ProfileNavContainer>
  );
};

export default ProfileNav;
