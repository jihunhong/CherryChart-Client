import ProfileCircle from '@atoms/ProfileCircle';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import UserMenu from './content';
import { PopOverMenusContainer } from './style';

const PopOverMenus = () => {
  const me = useSelector(state => state.user.me);
  return (
    <>
      <PopOverMenusContainer>
        {me ? (
          <Popover placement="bottomRight" trigger="click" content={<UserMenu />}>
            <ProfileCircle src={me?.picture} alt="users avatar" width={32} height={32} />
          </Popover>
        ) : null}
      </PopOverMenusContainer>
    </>
  );
};

export default PopOverMenus;
