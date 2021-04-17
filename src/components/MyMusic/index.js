import { Menu, Typography } from 'antd';
import { HiOutlineClock } from 'react-icons/hi';
import { AiOutlineFile } from 'react-icons/ai';
import { NavigationGlobal, MenuItem } from '../Navigation/style';
import { Title } from './style';
import { BiHeart } from 'react-icons/bi';

const MyMusic = () => {
  return (
    <>
      <NavigationGlobal />
      <Title level={5}>
        MY MUSIC
        {/* {me.userName} */}
      </Title>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <MenuItem key="6" icon={<HiOutlineClock />}>
          Played History
        </MenuItem>
        <MenuItem key="7" icon={<AiOutlineFile />}>
          Local Files
        </MenuItem>
        <MenuItem key="8" icon={<BiHeart />}>
          Favorite
        </MenuItem>
      </Menu>
    </>
  );
};

export default MyMusic;