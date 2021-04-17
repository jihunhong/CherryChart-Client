import { SIDEBAR_WIDTH } from '@config';
import { SidebarContainer } from './style';
import ProfileNav from '../ProfileNav';
import Navigation from '../Navigation';
import MyMusic from '../MyMusic';

const Sidebar = () => {
  return (
    <SidebarContainer theme="light" width={SIDEBAR_WIDTH}>
      <ProfileNav />
      <Navigation />
      <MyMusic />
    </SidebarContainer>
  );
};

export default Sidebar;