import Title from '@atoms/Title';
import { Menu, Row } from 'antd';
import { AiOutlineFile } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiMusic } from 'react-icons/fi';
import { HiOutlineClock } from 'react-icons/hi';
import { MenuItem, NavigationGlobal } from '../Navigation/style';
import { MyMusicContainer } from './style';

const MyMusic = () => {
  return (
    <>
      <NavigationGlobal />
      <MyMusicContainer>
        <Row align="middle">
          <h4>MY MUSIC</h4>
        </Row>
        <Menu inlineIndent={12} theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
      </MyMusicContainer>
    </>
  );
};

export default MyMusic;
