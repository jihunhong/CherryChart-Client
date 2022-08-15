import { FaGlobe, FaGlobeAsia } from 'react-icons/fa';
import { LogoContainer } from './style';

const Logo = ({ size = 17 }) => {
  return (
    <a href="/">
      <LogoContainer>
        <FaGlobeAsia size={size} />
        <span>CHERRY CHART</span>
      </LogoContainer>
    </a>
  );
};

export default Logo;
