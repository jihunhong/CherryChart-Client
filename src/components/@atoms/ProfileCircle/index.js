import { imgCdn } from '@config/';
import Image from 'next/image';
import { ProfileCircleContainer } from './style';

const ProfileCircle = ({ src, width = 38, height = 38, ...props }) => {
  if (src?.indexOf(imgCdn) > -1) {
    return (
      <ProfileCircleContainer $width={width} $height={height} {...props}>
        <Image src={src} width={width} height={height} lazyBoundary={`${height * 2}px`} />
      </ProfileCircleContainer>
    );
  }

  return (
    <ProfileCircleContainer {...props} $width={width} $height={height}>
      <img src={src} alt={props?.alt} width={width} height={height} referrerPolicy="no-referrer" />
    </ProfileCircleContainer>
  );
};

export default ProfileCircle;
