import LinkHOC from '@atoms/LinkHOC';
import { Menu } from 'antd';
import { BiChart, BiHomeAlt, BiMovie, BiMusic, BiWorld } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { MenuItem, NavigationGlobal } from './style';

const Navigation = () => {
  return (
    <>
      <NavigationGlobal />
      <Menu inlineIndent={12} theme="light" mode="inline" defaultSelectedKeys={[null]}>
        <MenuItem key="1" icon={<BiHomeAlt />}>
          <LinkHOC href={'/'}>Home</LinkHOC>
        </MenuItem>
        <MenuItem key="2" icon={<BiChart />}>
          <LinkHOC href={'/chart'}>Chart</LinkHOC>
        </MenuItem>
        <MenuItem key="3" icon={<BiWorld />}>
          <LinkHOC href={'/browse'}>Browse</LinkHOC>
        </MenuItem>
        <MenuItem key="4" icon={<BiMusic />}>
          <LinkHOC href={'/songs'}>Songs</LinkHOC>
        </MenuItem>
        <MenuItem key="5" icon={<FiUser />}>
          Artists
        </MenuItem>
        <MenuItem key="6" icon={<BiMovie />}>
          <LinkHOC href={'/videos'}>Videos</LinkHOC>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navigation;
