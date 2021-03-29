import { Popover, Badge } from 'antd';
import { FiBell, FiSettings } from 'react-icons/fi';
import { PopOverMenusGlobalStyle, InitilBadge } from './style';

const content = <div>일단 ui만 구현해놓은 상태에요</div>;

const PopOverMenus = () => {
  return (
    <>
      <PopOverMenusGlobalStyle />
      <Popover placement="bottomLeft" content={content} trigger="click">
        <InitilBadge dot>
          <FiBell />
        </InitilBadge>
      </Popover>
      <Popover placement="bottomRight" content={content} trigger="click">
        <Badge>
          <FiSettings />
        </Badge>
      </Popover>
    </>
  );
};

export default PopOverMenus;
