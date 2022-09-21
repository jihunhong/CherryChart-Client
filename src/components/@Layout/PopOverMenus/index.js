import ProfileCircle from '@atoms/ProfileCircle';
import { useSelector } from 'react-redux';
import { PopOverMenusContainer } from './style';

const PopOverMenus = () => {
  const me = useSelector(state => state.user.me);
  return (
    <>
      <PopOverMenusContainer>
        {me ? <ProfileCircle src={me?.picture} alt="users avatar" width={32} height={32} /> : null}
      </PopOverMenusContainer>
    </>
  );
};

export default PopOverMenus;
