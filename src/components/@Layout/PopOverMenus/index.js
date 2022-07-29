import ProfileCircle from '@atoms/ProfileCircle';
import { Badge, Popover } from 'antd';
import { FiBell, FiSettings } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { InitilBadge, PopOverMenusContainer } from './style';

const content = <div>일단 ui만 구현해놓은 상태에요</div>;

const PopOverMenus = () => {
  const me = useSelector(state => state.user.me);
  return (
    <>
      <PopOverMenusContainer>
        {me ? (
          <>
            <Popover placement="bottomLeft" content={content} trigger="click">
              <InitilBadge dot>
                <FiBell color="#a3b1bf" />
              </InitilBadge>
            </Popover>
            <ProfileCircle src={me?.picture} alt="users avatar" width={32} height={32} />
          </>
        ) : null}
      </PopOverMenusContainer>
    </>
  );
};

export default PopOverMenus;
